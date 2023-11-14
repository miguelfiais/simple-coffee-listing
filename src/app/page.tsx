import Image from 'next/image'
import CoffeeListing from './components/coffee-listing'

export interface ICoffee {
  id: number
  name: string
  image: string
  price: string
  rating: string | number | null
  votes: number
  popular: boolean
  available: boolean
}

export const getCoffeeListing = async () => {
  const coffeeListing = (await fetch(
    'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json',
  ).then((response) => response.json())) as ICoffee[]
  return coffeeListing
}

export default async function Home() {
  const coffeeListing = await getCoffeeListing()
  return (
    <main>
      <Image
        src="/bg-cafe.jpg"
        alt="coffee shop"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
      />
      <div className="relative -top-12 px-8 sm:-top-14 md:-top-16 lg:-top-20 xl:-top-24">
        <div className="container mx-auto rounded-lg bg-bg-secondary px-5 py-8">
          <div className="flex flex-col items-center bg-collection bg-top bg-no-repeat pt-12 text-center">
            <h1 className="text-2xl font-bold text-titles md:text-3xl lg:text-4xl">
              Our Collection
            </h1>
            <p className="mt-3 max-w-xs text-sm font-semibold text-text-description sm:max-w-sm md:max-w-md md:text-base lg:max-w-lg">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <CoffeeListing coffeeListing={coffeeListing} />
        </div>
      </div>
    </main>
  )
}
