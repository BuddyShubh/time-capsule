"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kd2MErJ3Paj
 */
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Component(props: any) {
  const formatDate = (fullDate: string) => {
    let dateTime = new Date(fullDate)
    let date = dateTime.getDate()
    let month = dateTime.toLocaleString('default', { month: 'long' });
    let year = dateTime.getFullYear()
    return `${month} ${date}, ${year}`
  }

  const [days, setdays] = useState(0)
  const [hours, sethours] = useState(0)
  const [minutes, setminutes] = useState(0)

  // Set the date we're counting down to
  var countDownDate = new Date(`${props.date} ${props.time}`).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }

    // Time calculations for days, hours, minutes and seconds
    setdays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setminutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))


  }, 1000);

  return (
    <Card className={"transition-all hover:bg-red-600/10 flex-1 w-min max-w-full flex flex-col items-center p-4 space-y-4"}>
      <div className="border-4 border-gray-300 rounded-lg p-4 w-full">
        <CardContent className="relative py-12 flex flex-col items-center justify-center space-y-4">
          <p className="text-4xl font-bold">{`${days}:${hours}:${minutes}`}</p>
          <p className=" text-sm">{formatDate(props.dateBuried)}</p>
          <h2 className="text-sm font-semibold absolute left-0 bottom-0">{props.name}</h2>
        </CardContent>
      </div>
      <p>{props.title}</p>
      <Button className="bg-black text-white px-4 py-2 rounded mb-4">Buy Now</Button>
    </Card>
  )
}

