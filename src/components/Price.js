/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from './Main.module.scss'

export default function Price() {

    return (
        <section className={s.price}  >

            <img className={s.copy} src="/img/copy_01.svg" alt="webサイト*チラシ制作 月々４,980円〜初回19,980円〜" />

        </section >
    )
}
