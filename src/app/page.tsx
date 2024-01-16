import Card from "@/components/ui/pui/Card";
import { GetData } from "../lib/fetch";




export default async function Home() {
  let data = await GetData("https://express-8teazmyg8-buddyshubhs-projects.vercel.app/data")
  let renderCards = () => {
    let cardsData = data.map((item: any) => {
      return item
    })
    let cards = cardsData.map((item: any) => {
      return <Card date={item.date} time={item.time} title={item.title} name={item.name} dateBuried={item.dateBuried} key={Math.random()} />
    })
    return cards

  }
  // renderCards()

  return (
    <main className=" gap-2 h-full px-3">
      {renderCards()}
    </main>
  )
}