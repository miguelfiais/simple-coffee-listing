'use client'

import { useState } from 'react'
import { ICoffee } from '../page'
import CoffeeCard from './coffee-card'
import FilterButton from './filter-button'

interface CoffeeListingProps {
  coffeeListing: ICoffee[]
}

const CoffeeListing = ({ coffeeListing }: CoffeeListingProps) => {
  const [filter, setFilter] = useState(false)

  const filteredCoffeeListing = filter
    ? coffeeListing.filter((coffee) => coffee.available)
    : coffeeListing

  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center gap-8 py-8">
          <li>
            <FilterButton
              active={filter === false}
              onClick={() => setFilter(false)}
            >
              All Products
            </FilterButton>
          </li>
          <li>
            <FilterButton
              active={filter === true}
              onClick={() => setFilter(true)}
            >
              Available Now
            </FilterButton>
          </li>
        </ul>
      </nav>
      <div className="grid justify-items-center gap-8">
        {filteredCoffeeListing.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  )
}

export default CoffeeListing
