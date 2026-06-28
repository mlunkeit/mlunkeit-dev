import { Link, useLocation } from "react-router-dom";
import { SquareChevronRight, SquareChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

export function Sidebar({ children }: { children: React.ReactNode })
{
  const location = useLocation();

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setShowSidebar(false);
  }, [location]);

  return (
    <>
      {!showSidebar && <div className="lg:hidden absolute left-4 top-25 w-10 h-10 border border-ctp-surface2 rounded-2xl bg-ctp-crust flex items-center justify-center cursor-pointer z-10"
        onClick={() => setShowSidebar(true)}>
        <SquareChevronRight />
      </div>}
      <div className="relative w-8 lg:w-auto">
        <div className={`${showSidebar ? "flex" : "hidden"}
          lg:bg-ctp-base bg-ctp-crust absolute lg:relative lg:flex flex-col p-3 sm:rounded-2xl
          sm:border border-ctp-surface2 h-full max-h-full w-xs`}>
          <div className="relative h-full w-full">
            {children}
            <div className="flex lg:hidden absolute top-0 right-0 p-3 cursor-pointer"
              onClick={() => setShowSidebar(false)}>
              <SquareChevronLeft />
            </div>
          </div>
        </div>
      </div>
    </>
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
