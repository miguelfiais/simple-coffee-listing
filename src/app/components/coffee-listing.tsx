import CoffeeCard from './coffee-card'

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

const CoffeeListing = async () => {
  const coffeeListing = await getCoffeeListing()
  return (
    <div className="grid justify-items-center gap-8 py-8">
      {coffeeListing.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}

export default CoffeeListing
