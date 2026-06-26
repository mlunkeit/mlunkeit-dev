import { Rust, C, CPlusplus, Java, LinuxTux, GitIcon, DockerIcon, MysqlIcon, Gopher, Python } from "@dev.icons/react/mono";

const nameAscii = `
    __  ___      ____         __                __        _ __
   /  |/  /___ _/ / /____    / /   __  ______  / /_____  (_) /_
  / /|_/ / __ \`/ / __/ _ \\  / /   / / / / __ \\/ //_/ _ \\/ / __/
 / /  / / /_/ / / /_/  __/ / /___/ /_/ / / / / ,< /  __/ / /_
/_/  /_/\\__,_/_/\\__/\\___/ /_____/\\__,_/_/ /_/_/|_|\\___/_/\\__/

`;

export default function Hero()
{
  return (
    <div className="font-mono text-ctp-text min-h-[85vh] w-full flex items-center justify-center p-4 md:p-8">
      <div className="bg-ctp-base border-ctp-surface0 border-2 rounded-xl p-2 max-w-5xl">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-ctp-red" />
          <div className="w-3 h-3 rounded-full bg-ctp-yellow" />
          <div className="w-3 h-3 rounded-full bg-ctp-green" />
        </div>

        <div className="p-4 flex flex-col space-y-2">
          <pre className="font-bold text-ctp-blue">{nameAscii}</pre>

          <div className="text-ctp-subtext0">Willkommen auf meiner Webseite! Hier findest du Informationen über mich und über mathematische und informatische Themen, die mich interessieren.</div>

          <div>
            <span className="text-ctp-green">guest@mlunkeit.dev</span>:<span className="text-ctp-blue">~</span>$ cat info.md
          </div>

          <div className="space-y-3 text-ctp-subtext pl-2">
            <p>Tech Stack</p>
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
          </div>

          <div>
            <span className="text-ctp-green">guest@mlunkeit.dev</span>:<span className="text-ctp-blue">~</span>$ <span className="w-2 h-4 bg-ctp-text animate-terminal-cursor inline-block" />
          </div>
        </div>
      </div>
    </div>
  )
}
