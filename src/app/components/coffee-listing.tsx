interface ICoffee {
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
  console.log(coffeeListing)
  return <div>CoffeeListing</div>
}

export default CoffeeListing
