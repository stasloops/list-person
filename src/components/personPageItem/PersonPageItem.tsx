import React, { FC, useEffect, useState } from 'react'
import { useInput } from '../../hooks/useInput';
import { IUsers, IUsersInput } from '../../types/users';
import PageItemInput from '../pageItemInput/PageItemInput';

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
  }, [send]);

    useEffect(() => {
        console.log(JSON.stringify(newItem));
    }, [newItem])

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
        <PageItemInput
            disable={disable} inputHandler={e => name.inputHandler(e)}
            value={name.value} placeholder={placeholder.name}
            error={name.error}
        />
        <div className='person__page-input__title'>
            User name:
        </div>
        <PageItemInput
            disable={disable} inputHandler={e => username.inputHandler(e)}
            value={username.value} placeholder={placeholder.username}
            error={username.error}
        />
        <div className='person__page-input__title'>
           E-mail:
        </div>
        <PageItemInput
            disable={disable} inputHandler={e => email.inputHandler(e)}
            value={email.value} placeholder={placeholder.email}
            error={email.error}
        />
        <div className='person__page-input__title'>
            Street:
        </div>
        <PageItemInput
            disable={disable} inputHandler={e => street.inputHandler(e)}
            value={street.value} placeholder={placeholder.street}
            error={street.error}
        />
        <div className='person__page-input__title'>
            City:
        </div>
        <PageItemInput
            disable={disable} inputHandler={e => city.inputHandler(e)}
            value={city.value} placeholder={placeholder.city}
            error={city.error}
        />
        <div className='person__page-input__title'>
            Zip code:
        </div>
        <PageItemInput
            disable={disable} inputHandler={e => zipcode.inputHandler(e)}
            value={zipcode.value} placeholder={placeholder.zipcode}
            error={zipcode.error}
        />
        <div className='person__page-input__title'>
            Phone:
        </div>
        <PageItemInput
            disable={disable} inputHandler={e => phone.inputHandler(e)}
            value={phone.value} placeholder={placeholder.phone}
            error={phone.error}
        />
        <div className='person__page-input__title'>
            Website:
        </div>
        <PageItemInput
            disable={disable} inputHandler={e => website.inputHandler(e)}
            value={website.value} placeholder={placeholder.website}
            error={website.error}
        />
    </div>
  )
}

export default PersonPageItem;
