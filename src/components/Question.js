/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import BlockQuestions from './layoutComp/BlockQuestion';

import s from './Main.module.scss'

export default function Quetion() {

    return (
        <section className={s.question}  >
            <h1>よくある質問</h1>


            <BlockQuestions title="なぜ、低価格で依頼できるのですか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec1}
            />

            <BlockQuestions title="チラシだけ、webサイトだけでもいいですか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec2}
            />

            <BlockQuestions title="チラシの刷り増しはできますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec3}
            />

            <BlockQuestions title="依頼してから納品まではどのくらいかかりますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec4}
            />

            <BlockQuestions title="ヒアリング（打合わせ）はどのように行いますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec5}
            />

            <BlockQuestions title="写真がないので撮影もお願いしたいのですが？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec6}
            />

            <BlockQuestions title="ロゴデザインもお願いできますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec7}
            />

            <BlockQuestions title="写真素材、イラスト素材は使用できますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec1}
            />

            <BlockQuestions title="webサイトやチラシの文字原稿は自分でつくらないといけませんか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec2}
            />

            <BlockQuestions title="更新費用はどのくらいかかりますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec3}
            />

            <BlockQuestions title="告知やブログを自分更新したのですが、、？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec4}
            />

            <BlockQuestions title="解約したいときは？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec5}
            />

            <BlockQuestions title="SEOってなに？SEO対策はしてもらえますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec6}
            />

            <BlockQuestions title="チラシのポスティングもお願いできますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec7}
            />

            <BlockQuestions title="チラシとwebサイトの効果はありますか？"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                color={s.sec1}
            />








        </section >
    )
}
