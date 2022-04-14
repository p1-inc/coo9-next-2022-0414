/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from '../../components/Main.module.scss'

export default function TextField({ label, width, borderColor, placeholder, name, type, onchange, value, required, validation }) {


  const [toggleClick, isToggleClick] = useState(false)
  const [inputValue, setInputValue] = useState(value)


  const textField = {
    display: 'block',
    textAlign: 'center',
  }


  useEffect(() => {
    setInputValue(value)
  }, [value])



  return (

    <>
      <div className="wrapperStyle"  >
        <input
          className="inputStyle"
          type={type}

          required={required}
          name={name}
          onFocus={() => { isToggleClick(true) }}
          onBlur={() => { isToggleClick(false) }}
          onChange={onchange}

        />
        <div className="ph">{placeholder}</div>
        <div className="validation">{validation}</div>
      </div>

      <style jsx>{`


    .wrapperStyle {
      display: block;
      position: relative;
      margin: 0 auto;
      margin-bottom:2rem;
      width: ${width}%;
      border: 10px solid #fff;
      border-radius: 1rem;
      font-size: 1.2rem;
    }

    .inputStyle {
      display: block;
      margin: 0 auto;
      width: 100%;
      padding: 0.5rem;
      border: ${validation ? `4px solid red` : `4px solid ${borderColor}`};
      border-radius: 1rem;
      font-size: 1.2rem;
  }

  .inputStyle:focus{
    outline:none;
    
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px #FFF inset;
}

  .ph {
      cursor: default;
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 1rem;

      transform:${toggleClick || inputValue ? "translate(-10%, -130%) scale(70%)" : "translate(0%, -50%) scale(100%)"};
      transition:  .2s;
      color: #000;
      font-size: 1.2rem;
      background-color:#FFF;
      padding:0 .5rem 0 .5rem ;
 
  
    }

    .validation{
      position: absolute;
      left:1rem;
      color:red;

    }

    

  `}</style>




    </>
  )
}
