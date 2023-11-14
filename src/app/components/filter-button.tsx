import { ComponentProps } from 'react'

interface FilterButtonProps extends ComponentProps<'button'> {
  active?: boolean
}

const FilterButton = ({ active, ...props }: FilterButtonProps) => {
  return (
    <button
      data-active={active}
      {...props}
      className="rounded-lg px-4 py-2 text-sm font-semibold text-titles data-[active=true]:bg-text-description"
    />
  )
}

export default FilterButton
