import React, { FC } from 'react';
import PersonItem from '../personItem/PersonItem';
import './Person.scss'

interface PersonProps {
  users: any[];
  loading: boolean;
}

const Person:FC<PersonProps> = ({users, loading}) => {
  return( 
  <div>
    <div className='person'>
        <div className='person__title'>Список пользователей</div>
        <div className='person__items'>
        {
          loading === true ?
            <div style={{fontSize: '34px'}}>
              Загрузка...
            </div>
            :
            users.map((item) => (
                <PersonItem key={`${item.id}_${item.name}`} item={item}/>
            ))
        }
           
        </div>
    </div>
  </div>
  )
}

export default Person;
