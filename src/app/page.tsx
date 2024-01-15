import Card from "@/components/ui/pui/Card";

export default function Home() {

  const renderCards = () => {
    let cards = []
    for (let i = 0; i < 34; i++) {
      cards.push( <Card />)
    }
    return cards
  }
  return (
    <main className=" gap-2 h-full px-3">
      {renderCards()}
    </main>
  )
}
