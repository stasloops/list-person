import React, { FC, useState } from 'react';
import PersonPageItem from '../personPageItem/PersonPageItem';
import './PersonPage.scss'
interface PeronPageProps {
  itemPage: any;
}
const PersonPage:FC<PeronPageProps> = ({itemPage}) => {
  const [disable, setDisable] = useState<boolean>(true);
  const [errorInput, setErrorInput] = useState<boolean>(false)
  const [send, setSend] = useState<boolean>(false);

  const disableFalse = () => {
    setDisable(false)
  }
  const disableTrue = () => {
    setDisable(true)
    setSend(!send)
  }
  return(
   <div className='person__page'>
     <div className='person__page-title__container'>
      <div className='person__page-title'>Профиль пользователя</div>
      <button onClick={disableFalse} style={{backgroundColor: disable === false ? '#AFAFAF' : '#4B51EF' }}
              className='person__page-button'>
        Изменить
      </button>
     </div>
     
     <form className='person__page-form'>
       <PersonPageItem send={send} setErrorInput={setErrorInput} disable={disable} item={itemPage}/>
       <div className='person__page-input__title'>
           Comment:
       </div>
       <textarea style={{pointerEvents: disable === true ? 'none' : 'all', opacity: disable === true ? '0.5' : '1',}} className='person__page-comment' name="comment"></textarea>
     </form>
     <div className='person__page-button__container'>
      <button style={{backgroundColor: disable === true ? '#AFAFAF' : '#4B51EF', pointerEvents: errorInput === true ? 'none' : 'all' }}  onClick={disableTrue} className='person__page-button'>Отправить</button>
     </div>
   </div>
  )
}

export default PersonPage;
