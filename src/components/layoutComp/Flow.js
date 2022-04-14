/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from '../../components/Main.module.scss'

export default function Flow({ title, body, color, noarrow }) {


    let titles = title.split(/\\n/g)
    let bodies = body.split(/\\n/g)

    titles = titles.map((title) =>
        <>
            <div key={title}> {title}</div>
        </>
    )

    bodies = bodies.map((body) =>
        <>
            <span key={body}>{body}</span>
        </>
    )



    return (
        <div className={s.workFlow}  >


            <div className={s.workFlowPictWrap}>

                <div className={s.secWrapper}>

                    <div className={s.secLeft}>
                        <div className={`${color} ${s.sec}`}>
                            {titles}
                        </div>

                        {!noarrow &&
                            <div className={`${color} ${s.arrow}`}></div>}

                    </div>

                    <div className={s.secRight}>
                        <div className={`${s.secBody} `}>
                            {bodies}
                        </div>
                    </div>

                </div>



            </div>
        </div >
    )
}
