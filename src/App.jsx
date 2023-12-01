import { useState } from 'react'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)
  // console.log(counter);

  const carouselStructure = [
    {
      title: "Captain America",
      image: "captain_america.jpg",
      description: "Il supersoldato della Seconda Guerra Mondiale, noto per il suo scudo indistruttibile e il suo senso innato di giustizia."
    },
    {
      title: "Deadpool",
      image: "deadpool.jpg",
      description: "Un mercenario con il potere di guarigione rapida, noto per il suo senso dell'umorismo, le battute e la tendenza a rompere la quarta parete."
    },
    {
      title: "Hulk",
      image: "hulk.jpg",
      description: "Il dottor Bruce Banner, trasformato in un gigantesco mostro verde con forza sovrumana ogni volta che si arrabbia."
    },
    {
      title: "Spiderman",
      image: "spiderman.jpg",
      description: "Peter Parker, uno studente liceale che, dopo essere stato morso da un ragno radioattivo, ottiene poteri simili a quelli di un ragno."
    },
    {
      title: "Thor",
      image: "thor.jpg",
      description: "Dio del tuono e principe di Asgard, dotato di un martello magico chiamato Mjolnir e noto per la sua forza sovrumana."
    },
    {
      title: "Venom",
      image: "venom.jpg",
      description: "Un simbionte alieno che si lega a Eddie Brock, conferendogli poteri sovrumani, ma lottando contro la sua natura malvagia."
    },
  ];


  return (
    <>
      <Carousel structure={carouselStructure} />
    </>
  )
}

export default App
