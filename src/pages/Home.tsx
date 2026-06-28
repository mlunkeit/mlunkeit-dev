import { Rust, C, CPlusplus, Java, LinuxTux, GitIcon, DockerIcon, MysqlIcon, Gopher, Python, GithubIcon } from "@dev.icons/react/mono";
import { MailIcon } from "lucide-react";

const nameAscii = `
    __  ___      ____         __                __        _ __
   /  |/  /___ _/ / /____    / /   __  ______  / /_____  (_) /_
  / /|_/ / __ \`/ / __/ _ \\  / /   / / / / __ \\/ //_/ _ \\/ / __/
 / /  / / /_/ / / /_/  __/ / /___/ /_/ / / / / ,< /  __/ / /_
/_/  /_/\\__,_/_/\\__/\\___/ /_____/\\__,_/_/ /_/_/|_|\\___/_/\\__/

`;

function Hero()
{
  return (
      <div className="sm:bg-ctp-base border-ctp-surface0 sm:border-2 sm:rounded-xl p-2 max-w-full sm:max-w-5xl mt-auto mb-auto">
        <div className="hidden sm:flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-ctp-red" />
          <div className="w-3 h-3 rounded-full bg-ctp-yellow" />
          <div className="w-3 h-3 rounded-full bg-ctp-green" />
        </div>

        <div className="p-4 flex flex-col space-y-2">
          <pre className="font-bold text-ctp-blue text-[0.5rem] sm:text-sm">{nameAscii}</pre>

          <div className="text-ctp-subtext0">Welcome to my website! You can find informations about me and mathematical and computer science related topics here.</div>

          <div className="hidden sm:block">
            <span className="text-ctp-green">guest@mlunkeit.dev</span>:<span className="text-ctp-blue">~</span>$ cat info.md
          </div>

          <div className="space-y-3 text-ctp-subtext pl-2">
            <p className="font-bold">Tech Stack</p>
            <p className="flex items-center gap-5 flex-wrap">
              <span className="text-ctp-blue font-bold">➔ Systems & Core: </span>
              <span className="inline-flex items-center gap-1"><Rust size={20} /> Rust</span>
              <span className="inline-flex items-center gap-1"><C size={20} /> C</span>
              <span className="inline-flex items-center gap-1"><CPlusplus size={20} /> C++</span>
            </p>
            <p className="flex items-center gap-5 flex-wrap">
              <span className="text-ctp-green font-bold">➔ Backend & Cloud: </span>
              <span className="inline-flex items-center gap-1"><Java size={20} /> Java</span>
              <span className="inline-flex items-center gap-1"><Gopher size={20} /> Go</span>
            </p>
            <p className="flex items-center gap-5 flex-wrap">
              <span className="text-ctp-mauve font-bold">➔ Scripting & Tooling: </span>
              <span className="inline-flex items-center gap-1"><Python size={20} /> Python</span>
              <span className="inline-flex items-center gap-1"><LinuxTux size={20} /> Linux (Bash/Zsh)</span>
              <span className="inline-flex items-center gap-1"><GitIcon size={20} /> Git</span>
              <span className="inline-flex items-center gap-1"><DockerIcon size={20} /> Docker</span>
              <span className="inline-flex items-center gap-1"><MysqlIcon size={20} /> MySQL / MariaDB</span>
            </p>
            <p className="font-bold">Social</p>
            <p className="flex items-center gap-5 flex-wrap">
              <span className="text-ctp-lavender font-bold inline-flex items-center gap-2">➔ <GithubIcon size={20} /> GitHub:</span>
              <a href="https://github.com/mlunkeit" target="_blank" rel="noopener noreferrer">mlunkeit</a>
            </p>
            <p className="flex items-center gap-5 flex-wrap">
              <span className="text-ctp-flamingo font-bold inline-flex items-center gap-2">➔ <MailIcon size={20} /> Email:</span>
              <a href="mailto:guest@mlunkeit.dev" target="_blank" rel="noopener noreferrer">mail@mlunkeit.dev</a>
            </p>
          </div>

          <div className="hidden sm:block">
            <span className="text-ctp-green">guest@mlunkeit.dev</span>:<span className="text-ctp-blue">~</span>$ <span className="w-2 h-4 bg-ctp-text animate-terminal-cursor inline-block" />
          </div>
        </div>
      </div>
  )
}

export default function Home()
{
  return (
    <div className="font-mono text-ctp-text h-full sm:min-h-[85vh] w-full flex flex-col items-center justify-start sm:p-4 md:p-8 overflow-y-scroll">
      <Hero />
      <div className="text-center text-ctp-overlay2 mt-6 mb-6">
        <p>&copy; 2026 Malte Lunkeit</p>
        <p>
          Built with <a className="text-ctp-sky" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> and styled using
          <a className="text-ctp-mauve" href="https://catppuccin.com" target="_blank" rel="noopener noreferrer"> Catppuccin</a> color palette.
        </p>
      </div>
    </div>
  )
}
