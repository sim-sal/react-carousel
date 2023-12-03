import { useState } from 'react'
import Carousel from './components/Carousel'
import style from "./css/modules/Body.module.css"

function App() {
  const [count, setCount] = useState(0)
  // console.log(counter);

  const carouselStructure = [
    {
      title: "Captain America",
      image: "captain_america.jpg",
      description: "Steve Rogers, noto come Captain America, è un supersoldato creato durante la Seconda Guerra Mondiale. Dopo essere rimasto congelato per decenni, si sveglia nel mondo moderno. Il suo scudo vibranium è indistruttibile, e Rogers è noto per la sua lealtà, il senso innato di giustizia e la sua abilità nel leadership."
    },
    {
      title: "Deadpool",
      image: "deadpool.jpg",
      description: "Wade Wilson, alias Deadpool, è un mercenario con il potere della guarigione rapida, ma il prezzo da pagare è la sua instabilità mentale. Deadpool è famoso per il suo umorismo oscuro, le battute meta e la consapevolezza della sua esistenza nei fumetti. Ha un rapporto unico con i lettori, spesso rompendo la quarta parete."
    },
    {
      title: "Hulk",
      image: "hulk.jpg",
      description: "Il dottor Bruce Banner, trasformato in Hulk dopo un incidente con una bomba gamma. Hulk è un gigantesco mostro verde con forza sovrumana, e Bruce cerca di controllare la sua rabbia mentre lotta contro minacce potenti. Nonostante la sua natura distruttiva, Hulk è un membro fondamentale degli Avengers."
    },
    {
      title: "Spiderman",
      image: "spiderman.jpg",
      description: "Peter Parker, uno studente liceale morso da un ragno radioattivo. Acquisisce poteri simili a quelli di un ragno, tra cui forza, agilità e la capacità di arrampicarsi. Spider-Man combatte il crimine a New York, bilanciando la sua vita personale con la responsabilità di essere un supereroe. È noto per il suo spirito scherzoso durante il combattimento."
    },
    {
      title: "Thor",
      image: "thor.jpg",
      description: "Thor, dio del tuono e principe di Asgard. Armato con il martello magico Mjolnir, Thor possiede forza sovrumana e capacità di manipolare il clima. Combatte per proteggere sia Asgard che la Terra. Thor è noto per la sua maestosità e la sua sete di avventure epiche."
    },
    {
      title: "Venom",
      image: "venom.jpg",
      description: "Venom è un simbionte alieno che si lega a Eddie Brock. Conferisce a Brock poteri sovrumani, ma lotta contro la sua natura malvagia. Venom è sia nemico che alleato di Spider-Man a seconda delle circostanze. La relazione tra Eddie e Venom è complicata, con momenti di conflitto e cooperazione."
    },
    {
      title: "Loki",
      image: "loki.jpg",
      description: "Loki, dio dell'inganno e fratello adottivo di Thor. Noto per la sua astuzia e manipolazione degli eventi, Loki è un personaggio complesso con legami sia con il bene che con il male. La sua rivalità con Thor spesso si trasforma in alleanza quando la minaccia è sufficientemente grande."
    },
    {
      title: "Iron Man",
      image: "iron_man.jpg",
      description: "Tony Stark, genio miliardario e filantropo. Dopo essere stato ferito, costruisce un'armatura avanzata diventando Iron Man. Stark utilizza la sua tecnologia per combattere il crimine e affrontare minacce globali. Iron Man è noto per la sua intelligenza, il sarcasmo e la sua trasformazione da magnate degli affari a eroe tecnologico."
    },
    {
      title: "Groot",
      image: "groot.jpg",
      description: "Groot è un essere di legno in grado di rigenerarsi, membro dei Guardiani della Galassia. La sua celebre frase è 'Sono Groot', anche se la sua lingua è più complessa di quanto sembri. Groot è noto per il suo spirito altruista e la sua dedizione ai suoi amici, in particolare a Rocket Raccoon."
    }
  ];


  return (
    <body>
      <>
        <Carousel structure={carouselStructure} />
      </>
    </body>
  )
}

export default App
