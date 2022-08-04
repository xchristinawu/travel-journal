import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"
import "./css/main.css"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.title}
        {...item}
      />
    )
  })

  return (
    <>
      <Header />
      <section className="cards-list">
        {cards}
      </section>
    </>
  );
}