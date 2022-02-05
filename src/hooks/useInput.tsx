import React, { useState } from "react"

export function useInput(item: string) {
    const [value, setValue] = useState(item);
    const [error, setError] = useState(false);
  
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if(e.target.value.length < 4){
         setError(true)
        }
        else{
          setError(false)
        }
      }
    return {
        error,
        value,
        inputHandler
    }
}