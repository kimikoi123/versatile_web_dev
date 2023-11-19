import Image from "next/image"
import Card from "@/components/Card"

async function getData() {
  const res = await fetch(
    "https://nextjs-orpin-omega-98.vercel.app/api/restaurants"
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const data = await res.json()
  const sortedData = data.reduce((accumulator, currentObject) => {
    let key = currentObject.state
    if (!accumulator[key]) {
      accumulator[key] = []
    }
    accumulator[key].push(currentObject)
    return accumulator
  }, {})

  return sortedData
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="container mx-auto mt-16 px-6">
      <div className="flex flex-wrap gap-16">
        {Object.keys(data).map((key) => (
          <Card key={key} title={key} restaurants={data[key]} />
        ))}
      </div>
    </div>
  )
}
