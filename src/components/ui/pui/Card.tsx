/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kd2MErJ3Paj
 */
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className={"transition-all hover:bg-red-600/10 flex-1 w-min max-w-full flex flex-col items-center p-4 space-y-4"}>
      <div className="border-4 border-gray-300 rounded-lg p-4 w-full">
        <CardContent className="relative py-12 flex flex-col items-center justify-center space-y-4">
          <p className="text-4xl font-bold">12:34:56</p>
          <p className=" text-sm">January 1, 2023</p>
          <h2 className="text-sm font-semibold absolute left-0 bottom-0">John Doe</h2>
        </CardContent>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button className="bg-black text-white px-4 py-2 rounded mb-4">Buy Now</Button>
    </Card>
  )
}

