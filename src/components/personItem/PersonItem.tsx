import React, { FC } from 'react';
import './PersonItem.scss';
import { Link } from "react-router-dom";
import { IUsers } from '../../types/users';

interface PersonItemProps {
  item: IUsers;
}

const PersonItem:FC <PersonItemProps> = ({item}) => {
  console.log(item);
  
  return(
        <div className='person__item'>
            <span className='person__item-one'>ФИО:</span><span className='person__item-two'> {item.name}</span><br/>
            <span className='person__item-one'>город:</span><span className='person__item-two'> {item.address.city}</span><br/>
            <span className='person__item-one'>компания:</span><span className='person__item-two'> {item.company.name}</span>
            <Link to={`/${item.id}`} className='person__item-details'>Подробнее</Link>
        </div>
  )
}

export default PersonItem;
