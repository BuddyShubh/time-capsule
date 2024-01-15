"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hn3dSiD6OMF
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { fetchData } from "../../lib/sendData";
import { toast } from "sonner"


import { useState } from "react";

export default function Bury() {
  let [name, setName] = useState("")
  let [title, setTitle] = useState("")
  let [date, setDate] = useState("2024-01-01")
  let [time, setTime] = useState("12:00")
  let dateBuried = new Date()

  const sendData = () => {
    if (name.trim() === "" && title.trim() === "") {
      setName("")
      setTitle("")
      setDate("2024-01-01")
      setTime("12:00")
      return;
    }
    let data = {
      name: name,
      title: title,
      date: date,
      time: time,
      dateBuried: dateBuried
    }
    fetchData('http://localhost:4000/data', data)
      .then(data => {
        // handle successful response
        console.log('Data:', data);
        setName("")
        setTitle("")
        setDate("2024-01-01")
        setTime("12:00")
        toast()

      })
      .catch(error => {
        // handle error
        console.error('Error:', error);
      });
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div key="1" className="mx-10">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Capsule Details</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your capsule details below</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Shubham" required onChange={(e) => {
              setName(e.currentTarget.value)
            }} value={name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Sealed Moments from the Past" required onChange={(e) => {
              setTitle(e.currentTarget.value)
            }} value={title} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Opening Date</Label>
              <Input
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:border-blue-500"
                id="date"
                required
                type="date"
                // YYYY-MM-DD
                defaultValue={date}
                onChange={(e) => {
                  setDate(e.currentTarget.value)
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Opening Time</Label>
              <Input
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:border-blue-500"
                id="time"
                required
                type="time"
                defaultValue={time}
                onChange={(e) => {
                  setTime(e.currentTarget.value)
                }}
              />
            </div>
          </div>
          <Button onClick={sendData} className="w-full" type="submit">
            Bury
          </Button>
        </div>
      </div>
    </div>
  )
}

