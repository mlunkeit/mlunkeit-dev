import { Link } from "react-router-dom";

export function Sidebar({ children }: { children: React.ReactNode })
{
  return (
    <div className="bg-ctp-base p-3 rounded-2xl border border-ctp-surface2 h-full w-xs">
      {children}
    </div>
  )
}

export function SidebarSection({ label, link, children }: { label: string; link: string; children: React.ReactNode })
{
  return (
    <div>
      <Link className="text-ctp-text font-bold duration-300 hover:text-ctp-lavender" to={link}>{label}</Link>
      <div className="ml-1 pl-3 border-l-2 border-ctp-surface2 flex flex-col space-y-2 pt-2 pb-2">
        {children}
      </div>
    </div>
  )
}

export function SidebarItem({ label, link }: { label: string; link: string })
{
  return (
    <div>
      <Link className="text-ctp-text duration-300 hover:text-ctp-lavender" to={link}>{label}</Link>
    </div>
  )
}
