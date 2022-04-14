/* eslint-disable */
import { useState, useEffect, useRef } from 'react';

import Flow from './layoutComp/Flow';
import s from './Main.module.scss'

export default function Message2() {

    return (
        <section className={s.message2}  >
            <h1 className={s.body}>
                <span>基本的な制作費は</span> <span>すべて基本料金に含まれます。</span>
                <span> また、追加で費用が発生する場合は、</span>
                <span>事前にお客様にご連絡し、</span> <span>了承を得てから制作進行しますので、</span>
                <span>納品後に「こんなにかかるなんて知らなかった」なんてことがありません。</span>

            </h1>

        </section >
    )
}
