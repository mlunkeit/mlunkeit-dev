import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="bg-ctp-crust h-screen w-full relative text-ctp-text font-mono selection:bg-ctp-lavender selection:text-ctp-base">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-ctp-surface0)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-ctp-surface0)_1px,transparent_1px)]
        bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col h-screen overflow-hidden">
        <Navbar />

        <main className="flex flex-1 flex-col w-full items-center justify-center overflow-hidden">
          <div className="flex flex-1 w-full h-full items-stretch">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  )
}
