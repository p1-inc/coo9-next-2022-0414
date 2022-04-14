/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from './Main.module.scss'
import Button from './layoutComp/Button';

export default function Quickstart() {

    const handleOnclick = () => {

        alert("クリックスタート")
    }

    return (
        <section className={s.quickstart}  >
            <h1 className={s.body}>

                <span>当サービスを検討したい、</span><span>またはもっと詳しい内容をお聞きしたい方は、</span>
                <span>下記クイックスタートから</span><span>お入りください。</span>
                <span>スライド形式で丁寧に</span><span>ご説明いたします。</span>


            </h1>


            <Button
                text="クイックスタート"
                width="70vw"
                bgColor={s.bc_orange}
                onclick={handleOnclick}
            />


        </section >
    )
}
