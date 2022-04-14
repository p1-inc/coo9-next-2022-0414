/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from './Main.module.scss'

export default function WhatIs() {

    return (
        <section className={s.what}  >

            <h1 className={s.title}> <span>なぜwebサイトとチラシを</span><span>セットにするのですか？</span></h1>
            <h2 className={s.copy2}>新しくヨガ教室を始めるインストラクターさんにとって、自身で運営する教室にビジョンや夢がある一方、どうしても集客への不安があると思います。どれだけレッスン自信があったとしても、自分を知ってもらわないと運営は安定しません。</h2>
            <p className={s.copy3}><span>ヨガ入会までの</span><span>一般的なプロセス</span></p>
            <img src="/img/pict_01.svg" alt="" />

            <div class={s.copy_wrapper}>
                <p className={s.copy4}>チラシで<br />興味をもつ</p>
                <p className={s.copy5}>webサイトで<br />じっくり検討</p>
            </div>


            <p className={s.copy6}>
                <span>
                    一般的に、ヨガスタジオは半径3km圏内に居住するお客様がターゲットといわれています。SNSや口コミで発信するインストラクターさんも多いと思いますが、
                </span>
                <span>
                    近距離のお客様にリーチするためには、チラシを配布することが最も有効な告知になることでしょう。
                </span>
                <span>
                    しかし、詳しい情報を発信し、ヨガスタジオを探して比較検討されているお客様にリーチするためにはどうしてもチラシだけでは情報が足りません。
                </span>
                <span>
                    そこでwebサイトを制作し、場所、時間、料金設定やレッスンの雰囲気など利用者が知りたい情報を詳細に発信していく必要があります。
                </span>
            </p>


            <p className={s.copy7}>
                <span>
                    つまり新規のお客様にとっては、チラシで知ってwebサイトで比較検討するというのが主な加入までへの流れです。
                </span>


            </p>

            <p className={s.copy7}>

                <span>
                    これから新しく始めるヨガスタジオ・インストラクターさんにとって、フライヤーとwebサイトを活用し、より安心してレッスンの運営できるようにお手伝いしたいです。
                </span>

            </p>




        </section >
    )
}
