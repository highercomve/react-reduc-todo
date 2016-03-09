import React from 'react'

const FilterBy = ({
  filter,
  visibilityFilter,
  onClick,
  children }) => {
    return (
      <a href="#"
        onClick={onClick}
        className={(visibilityFilter === filter) ? 'active': ''}>
        { children }
      </a>
    )
}

const FilterMenu = ({ filters, visibilityFilter, handleFilter }) => {
  return (
    <div className="filters-menu">
      { filters.map((filter, index) => {
        return (
          <FilterBy key={index}
            filter={filter.type}
            onClick={() => { handleFilter(filter.type) }}
            visibilityFilter={visibilityFilter} >
            { filter.text }
          </FilterBy>
        )
      })}
    </div>
  )
}

export default FilterMenu
