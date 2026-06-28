import { Link, useLocation } from "react-router-dom";
import { TextAlignJustify } from "lucide-react";
import { useState, useEffect } from "react";

function NavItem({ href, text }: { href: string; text: string })
{
  return (
    <li><Link className="p-1 rounded text-ctp-lavender duration-200 hover:bg-ctp-lavender hover:text-ctp-base" to={href}>{text}</Link></li>
  )
}

export default function Navbar()
{
  const [showItems, setShowItems] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowItems(false);
  }, [location]);

  return (
    <nav className="bg-ctp-base p-3 flex flex-row gap-6 sm:m-4 mb-0 sm:rounded-2xl sm:border border-ctp-surface2">
      <span>mlunkeit.dev</span>
      <span className="sm:hidden ml-auto cursor-pointer" onClick={() => setShowItems(!showItems)}><TextAlignJustify /></span>
      <div className={`
        ${showItems ? 'flex' : 'hidden'}
        sm:flex flex-col items-center justify-center sm:flex-row flex-2 absolute w-screen h-screen
        top-0 left-0 m-0 z-20 bg-ctp-base sm:w-auto sm:h-auto sm:relative
      `}>
        <ul className="flex flex-col sm:flex-row gap-4 items-center">
          <NavItem href="/" text="home" />
          <NavItem href="/notes" text="notebook" />
        </ul>
        <ul className="sm:ml-auto mt-10 sm:mt-0 flex flex-col sm:flex-row gap-4 items-center">
          §
          <NavItem href="/imprint" text="legal notice" />
          <NavItem href="/privacy" text="privacy" />
        </ul>
      </div>
    </nav>
  )
}
