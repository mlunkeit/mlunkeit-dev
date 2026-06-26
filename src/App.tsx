import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App()
{
  return (
    <div className="bg-ctp-crust min-h-screen w-full relative text-ctp-text font-mono">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1e2e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e2e_1px,transparent_1px)]
        bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 flex items-center justify-center">
          <Hero />
        </main>
      </div>

    </div>
  )
}
