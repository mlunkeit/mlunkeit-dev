import { Link } from "react-router-dom";

function NavItem({ href, text }: { href: string; text: string })
{
  return (
    <li><Link className="p-1 rounded text-ctp-lavender duration-200 hover:bg-ctp-lavender hover:text-ctp-base" to={href}>{text}</Link></li>
  )
}

export default function Navbar()
{
  return (
    <nav className="bg-ctp-base p-3 flex flex-row gap-6 m-4 mb-0 rounded-2xl border border-ctp-surface2">
      <span>mlunkeit.dev</span>
      <ul className="flex flex-row gap-4">
        <NavItem href="/" text="Home" />
        <NavItem href="/notes" text="Notes" />
      </ul>
      <ul className="ml-auto flex flex-row gap-4">
        §
        <NavItem href="/imprint" text="Impressum" />
        <NavItem href="/privacy" text="Datenschutzerklärung" />
      </ul>
    </nav>
  )
}
