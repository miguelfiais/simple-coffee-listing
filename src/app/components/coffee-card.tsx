import Image from 'next/image'
import { ICoffee } from '../page'

interface CoffeeCardProps {
  coffee: ICoffee
}
const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  return (
    <div className="relative">
      {coffee.popular && (
        <span className="absolute left-1 top-1 rounded-full bg-popular px-2 py-1 text-xs font-semibold text-bg-body">
          Popular
        </span>
      )}
      <Image
        src={coffee.image}
        alt={coffee.name}
        width={260}
        height={160}
        className="rounded-lg"
      />
      <div className="flex items-center justify-between py-2">
        <h2 className="font-medium text-titles">{coffee.name}</h2>
        <p className="rounded-md bg-bg-price p-1 text-sm font-semibold text-bg-body">
          {coffee.price}
        </p>
      </div>
      <div className="flex items-center justify-between">
        {coffee.rating ? (
          <div className="flex items-center gap-1">
            <Image
              src="/Star_fill.svg"
              alt="yellow star"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold text-titles">
              {Number(coffee.rating).toFixed(2)}
            </span>
            <span className="text-sm font-semibold text-text-description">
              ({coffee.votes} votes)
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Image src="/Star.svg" alt="star" width={24} height={24} />
            <span className="text-sm font-semibold text-text-description">
              No ratings
            </span>
          </div>
        )}
        {!coffee.available && (
          <span className="text-sm font-semibold text-sold-out">Sold out</span>
        )}
      </div>
    </div>
  )
}

export default CoffeeCard
