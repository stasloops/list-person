import React, { useEffect, useState, FC } from 'react';
import './PersonList.scss'
import axios from 'axios';
import Sort from '../../components/sort/Sort';
import Person from '../../components/person/Person';
import PersonPage from '../../components/personPage/PersonPage';
import { Route, Switch } from "react-router-dom";
import { IUsers } from '../../types/users';

const PersonList: FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [status, setStatus] = useState<string | null>(null);
  const [usersPage, setUsersPage] = useState<IUsers[]>([]);
  
  useEffect(() => {
    axios.get<IUsers[]>(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          setUsers(response.data)
          setUsersPage(response.data)
          setLoading(false)
        })
  }, []); 
  
if(status){
  status === 'name' ?  
      users.sort(function(a, b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
      :
      users.sort(function(a, b){
        if(a.address.city < b.address.city) return -1;
        if(a.address.city > b.address.city) return 1;
        return 0;
      })
}     
return (
      <div className='person__list'>
        <Sort setStatus={setStatus}/>
        <Switch>
         {
           usersPage.map((item) => (
            <Route key={`${item.id}_${item.name}`} path={`/${item.id}`} >
              <PersonPage itemPage={item}/>
            </Route>
           ))
         }
         <Route path='/'>
            <Person loading={loading} users={users}/>
         </Route>
       </Switch>
      </div>
  )
}

export default PersonList;
