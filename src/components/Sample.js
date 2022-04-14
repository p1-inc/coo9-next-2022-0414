/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from './Main.module.scss'

export default function Sample() {

    return (
        <section className={s.sample}  >

            <h1 className={s.title}>Sample</h1>
            <div className={s.wrapper}>

                <div className={`${s.web} ${s.sec1}`}>

                    <div className={`${s.opacitybg} ${s.bc_l2_green}`}> </div>

                    <h2 >webサイト</h2>

                    <div className={`${s.webImage} ${s.image}`}>
                        <a href=""><img src="/img/webSample.png" alt="" /></a>
                    </div>


                    <a href="" className={`${s.prevBtn} ${s.bc_green} `} > プレビュー</a>

                    <div className={s.sec2}>
                        <h3>webサイト制作</h3>
                        <p>初期費用無し</p>
                        <img src="/img/webPrice.svg" alt="" />
                    </div>

                    <div className={`${s.bc_green} ${s.supplement}`}>
                        サーバー管理費含む<br />
                        新規ドメインを取得料金含む<br />
                    </div>

                </div>




                <div className={`${s.flyer} ${s.sec1}`}>

                    <div className={`${s.opacitybg} ${s.bc_l2_pink}`}> </div>

                    <h2 >チラシ</h2>
                    <div className={`${s.flyImage} ${s.image}`}>

                        <a href=""><img src="/img/flyerSample.png" alt="" /></a>
                    </div >

                    <a href="" className={`${s.prevBtn} ${s.bc_orange} `} > プレビュー</a>



                    <div className={s.sec2}>
                        <h3>チラシ制作</h3>
                        <p>A4両面フルカラー100枚</p>
                        <img src="/img/flyerPrice.svg" alt="" />

                        <p>（デザイン・送料費込）</p>
                        <p>簡易校正色付き（レーザープリンタ）</p>
                    </div>

                    <div className={`${s.bc_orange} ${s.supplement}`}>
                        ※ご自身の写真や、スタジオの写真など、
                        写真素材はお客様の方でご用意ください。
                        弊社に撮影を依頼したい場合は、
                        別料金で対応いたします。
                        お気軽にご相談ください。
                    </div>

                </div>
            </div>

        </section >
    )
}
