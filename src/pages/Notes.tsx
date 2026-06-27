import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar, SidebarSection, SidebarItem } from "../components/Sidebar";
import { notesDocs, type DocItem } from "../config/docsConfig";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

import "katex/dist/katex.min.css";
import "./style/markdown.css";

function renderDocItemInSidebar(item: DocItem, path: string)
{
  if (item.items)
  {
    return (<SidebarSection label={item.title} link={path + "/" + item.id}>
      {item.items.map((child) => renderDocItemInSidebar(child, `${path}/${item.id}`))}
    </SidebarSection>);
  }
  else
  {
    return (<SidebarItem label={item.title} link={path + "/" + item.id} />);
  }
}

function findDocByPath(items: DocItem[], path: string): DocItem | undefined
{
  const parts = path.split("/");
  if (parts.length === 0)
  {
    return undefined;
  }

  const part = parts[0];
  const rest = parts.slice(1).join("/");
  for (const item of items)
  {
    if (item.id === part)
    {
      if (parts.length === 1)
      {
        return item;
      }
      if (item.items)
      {
        return findDocByPath(item.items, rest);
      }
    }
  }
  return undefined;
}

export default function Notes()
{
  const location = useLocation();
  const path = location.pathname.replace("/notes/", "")

  const doc = findDocByPath(notesDocs, path);

  const [markdownContent, setMarkdownContent] = useState("Please select an entry.");

  useEffect(() => {
    if (!doc || !doc.filePath) return;

    setMarkdownContent("Loading...");

    fetch(doc.filePath)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response;
      })
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => setMarkdownContent("Error loading: " + error.message));
  }, [location.pathname, doc]);

  return (<div className="min-h-full w-full flex flex-row p-4 space-x-4">
    <Sidebar>
      {notesDocs.map((item) => renderDocItemInSidebar(item, "/notes"))}
    </Sidebar>

    <div className="flex-1 p-4 bg-ctp-base rounded-2xl border border-ctp-surface2 markdown overflow-y-scroll">
      <Markdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
      >{markdownContent}</Markdown>
    </div>
  </div>)
}
