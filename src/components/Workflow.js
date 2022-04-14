/* eslint-disable */
import { useState, useEffect, useRef } from 'react';

import Flow from './layoutComp/Flow';
import Flow_sp
    from './layoutComp/Flow_sp';
import s from './Main.module.scss'

export default function Workflow() {

    return (
        <section className={s.workFlow}  >
            <h1>ご依頼から納品までの流れ</h1>

            <div className={s.pc}>
                <Flow title="クイック\nスタート\nを見る"
                    body="このwebサイトの「クイックスタート」から\nサービスの説明を御覧ください、細かいサービス内容がわかる\n内容になっています。"
                    color={s.sec1}
                />

                <Flow title="お問合わせ"
                    body="このwebサイトのお問合わせからご連絡ください"
                    color={s.sec2}
                />

                <Flow title="ヒアリング"
                    body="お客様のご希望、ご相談をお聞きします。\nZOOM、メール、電話等でお打ち合わせいたします"
                    color={s.sec3}
                />

                <Flow title="デザイン案"
                    body="ヒアリングでお聞きしたご依頼を元にデザイン案をお出しします。\nその後、お客様の希望を聞き、約2〜3回ほど修正案をご提示します"
                    color={s.sec4}
                />

                <Flow title="納　品"
                    body="チラシとwebサイト納品日が前後することがあります\n納品までの期間は通常1ヶ月ほど最速で1週間です"
                    color={s.sec5}
                    noarrow={true}
                />
            </div>

            <div className={s.sp}>
                <Flow_sp title="クイックスタートを見る"
                    body="このwebサイトの「クイックスタート」から\nサービスの説明を御覧ください、細かいサービス内容がわかる\n内容になっています。"
                    color={s.sec1}
                />

                <Flow_sp title="お問合わせ"
                    body="このwebサイトのお問合わせからご連絡ください"
                    color={s.sec2}
                />

                <Flow_sp title="ヒアリング"
                    body="お客様のご希望、ご相談をお聞きします。\nZOOM、メール、電話等でお打ち合わせいたします"
                    color={s.sec3}
                />

                <Flow_sp title="デザイン案"
                    body="ヒアリングでお聞きしたご依頼を元にデザイン案をお出しします。\nその後、お客様の希望を聞き、約2〜3回ほど修正案をご提示します"
                    color={s.sec4}
                />

                <Flow_sp title="納　品"
                    body="チラシとwebサイト納品日が前後することがあります\n納品までの期間は通常1ヶ月ほど最速で1週間です"
                    color={s.sec5}
                    noarrow={true}
                />
            </div>





        </section >
    )
}
