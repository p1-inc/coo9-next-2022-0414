/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from '../../components/Main.module.scss'

export default function Flow_sp({ title, body, color, noarrow }) {


    let titles = title;
    let bodies = body.replace(/\\n/g, '')




    return (
        <div className={s.workFlow}  >

            <div className={`${color} ${s.workFlowPictWrap}`}>
                <div className={s.secLeft}>
                    {titles}
                </div>
                <div className={`${s.secBody} `}>
                    {bodies}
                </div>
            </div>
            {!noarrow &&
                <div className={`${color} ${s.arrow}`}></div>}

        </div >
    )
}
