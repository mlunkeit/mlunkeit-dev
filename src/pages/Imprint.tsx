import "./style/paragraph.css";

export default function Imprint() {
  return (
    <div className="p-4 w-full h-full flex flex-col items-center justify-center">
      <div className="paragraph w-3xl">
        <h1>Impressum</h1>
        <h2>Verantwortlicher</h2>
        <p>Malte Lunkeit</p>
        <h3>Postanschrift</h3>
        <p>Lehnitzstraße 7<br />
        12623 Berlin</p>
        <h3>Kontakt</h3>
        <p>E-Mail: mail@mlunkeit.dev</p>
        <p>Telefon: +49 (0) 174 3611686</p>
        <p><em>Dieses Impressum wurde mit Hilfe des <a href="https://www.activemind.de/generatoren/impressum/" target="_blank" rel="noopener">Impressums-Generators der activeMind AG</a> erstellt (Version 2024-07-21).</em></p>
      </div>
    </div>
  )
}
