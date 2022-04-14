/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from './Main.module.scss'
import Button from './layoutComp/Button';

export default function Apply() {





    return (
        <section className={s.apply}  >

            <Button
                text="お申し込み＆お問合わせ"
                width="70vw"
                bgColor={s.bc_blue}
                onclick={onclick}
            />


        </section >
    )
}
