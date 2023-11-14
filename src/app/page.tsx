import Image from 'next/image'
import CoffeeListing from './components/coffee-listing'

export default function Home() {
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
      <div className="relative -top-12 px-8">
        <div className="container mx-auto rounded-lg bg-bg-secondary px-5 py-8">
          <div className="flex flex-col items-center bg-collection bg-top bg-no-repeat pt-12 text-center">
            <h1 className="text-2xl font-bold text-titles">Our Collection</h1>
            <p className="mt-3 text-sm font-semibold text-text-description">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <CoffeeListing />
        </div>
      </div>
    </main>
  )
}
