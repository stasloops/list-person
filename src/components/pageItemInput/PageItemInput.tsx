import React, { FC } from 'react'

interface PageItemInputProps {
    inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    error: boolean;
    disable: boolean;
    placeholder: string;
    
}

const PageItemInput:FC<PageItemInputProps> = ({inputHandler, value, error, disable, placeholder}) => {
return (<>
        <input 
            onChange={e => inputHandler(e)} 
            value={value} placeholder={placeholder} 
            style={{border: error === false ? '1px solid #D8D8D8' : '1px solid #D91313' }}
            className={disable === true ? 'person__page-input__disable' : 'person__page-input'}
        />
  </>)
}

export default PageItemInput