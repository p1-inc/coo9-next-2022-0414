/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from '../../components/Main.module.scss'

export default function Button({ text, width, bgColor, onclick }) {


    const qstyle = {
        width: width,


    }

    return (

        <a onClick={onclick}>
            <div className={`${s.button} ${bgColor}`} style={qstyle} >
                {text}
            </div >
        </a>
    )
}
