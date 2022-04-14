/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from '../../components/Main.module.scss'

export default function SubmitButton({ text, width, bgColor, onclick }) {


    const qstyle = {
        width: width,


    }

    return (
        <input className={`${s.button} ${bgColor}`} style={qstyle} type="submit" value="Submit" onclick={onclick} />



    )
}
