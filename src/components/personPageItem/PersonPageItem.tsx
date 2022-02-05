import React, { FC, useEffect, useState } from 'react'
import { useInput } from '../../hooks/useInput';
import { IUsers, IUsersInput } from '../../types/users';

interface PersonPageItemProps{
    setErrorInput: (boolean: boolean) => void;
    item: IUsers;
    disable: boolean;
    send: boolean
}

const PersonPageItem:FC<PersonPageItemProps> = ({setErrorInput, item, disable, send}) => {
 const name = useInput(item.name)
 const username = useInput(item.username)
 const email = useInput(item.email)
 const street = useInput(item.address.street)
 const city = useInput(item.address.city)
 const zipcode = useInput(item.address.zipcode)
 const phone = useInput(item.phone)
 const website = useInput(item.website)

useEffect(() => {
    name.error || username.error ||
    email.error || street.error ||
    city.error || zipcode.error ||
    phone.error || website.error === true ? setErrorInput(true) : setErrorInput(false)

}, [name.error || username.error ||
    email.error || street.error ||
    city.error || zipcode.error ||
    phone.error || website.error]);

 const [newItem, setNewItem] = useState<IUsersInput>({name: '', username: '', email: '', 
                                         address: {street: '', city: '',  zipcode: ''}, 
                                         phone: '', website: ''})
  useEffect(() => {
    const valueName = () => {
        setNewItem({...newItem,
             name: name.value,
             username: username.value,
             email: email.value,
             address: {
                    street: street.value,
                    city: city.value, 
                    zipcode: zipcode.value
                     },
             phone: phone.value, 
             website: website.value
            })
    }
    valueName()
    console.log(JSON.stringify(newItem));
  }, [send]);

  const placeholder = {
    name: 'Ivan Ivanov', username: 'Ivan',
    email: 'example@mail.com', street: 'ул. Пример', city: 'Москва', 
    zipcode: '1234234', phone: '89991112233', website: 'wwwexamplecom'
  }

  return( 
    <div className='person__page-item'>
        <div className='person__page-input__title'>
            Name:
        </div>
        <input 
            onChange={e => name.inputHandler(e)} 
            value={name.value} placeholder={placeholder.name} 
            style={{border: name.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
        <div className='person__page-input__title'>
            User name:
        </div>
        <input 
            onChange={e => username.inputHandler(e)} 
            value={username.value} placeholder={placeholder.username} 
            style={{border: username.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
        <div className='person__page-input__title'>
           E-mail:
        </div>
        <input 
            onChange={e => email.inputHandler(e)} 
            value={email.value} placeholder={placeholder.email} 
            style={{border: email.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
        <div className='person__page-input__title'>
            Street:
        </div>
        <input 
            onChange={e => street.inputHandler(e)} 
            value={street.value} placeholder={placeholder.street} 
            style={{border: street.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
        <div className='person__page-input__title'>
            City:
        </div>
        <input 
            onChange={e => city.inputHandler(e)} 
            value={city.value} placeholder={placeholder.city} 
            style={{border: city.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
        <div className='person__page-input__title'>
            Zip code:
        </div>
        <input 
            onChange={e => zipcode.inputHandler(e)} 
            value={zipcode.value} placeholder={placeholder.zipcode} 
            style={{border: zipcode.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
        <div className='person__page-input__title'>
            Phone:
        </div>
        <input 
            onChange={e => phone.inputHandler(e)} 
            value={phone.value} placeholder={placeholder.phone} 
            style={{border: phone.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
        <div className='person__page-input__title'>
            Website:
        </div>
        <input 
            onChange={e => website.inputHandler(e)} 
            value={website.value} placeholder={placeholder.phone} 
            style={{border: website.error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
    </div>
  )
}

export default PersonPageItem;
