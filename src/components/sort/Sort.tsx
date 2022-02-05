import React, { useState, useEffect, FC } from 'react';
import './Sort.scss'

interface SortProps {
  setStatus: (string: string) => void
  
}
const Sort: FC<SortProps> = ({setStatus}) => {
  const [filter, setFilter] = useState<string>('');
  useEffect(() => {
    setStatus(filter)
  }, [filter]);
  
  const nameFilter = () => {
    setFilter('name')
  }
  const cityFilter = () => {
    setFilter('city')
  }
  return (
  <div className='sort'>
    <div className='sort__inner'>
      <div className='sort__title'>
        Сортировка
      </div>
      <button onClick={nameFilter} className='sort__button'>по имени</button>
      <button onClick={cityFilter} className='sort__button'>по городу</button>
    </div>
  </div>
  )
}

export default Sort;
