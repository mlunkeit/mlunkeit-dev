export default function Navbar()
{
  return (
    <nav className="bg-ctp-base p-3 flex flex-row gap-6">
      <span>mlunkeit.dev</span>
      <ul className="flex flex-row gap-4 text-ctp-maroon">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}
