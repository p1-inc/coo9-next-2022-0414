/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from './Main.module.scss'







export default function Topview() {

    const ref = useRef();


    //パララックスのスピードの設定[初期位置,移動係数]
    const bg_01_init = [50, 5];
    const bg_02_init = [50, 2];
    const bg_03_init = [50, -2];
    const woman_01_init = [62, -1];
    const table_01_init = [66, -18];
    const clock_01_init = [51, -30];
    const plant_01_init = [70, -17.5];
    const plant_02_init = [70, -15];
    const book_01_init = [50, -28];
    const star_01_init = [20, -28];
    const star_02_init = [20, -28];
    const star_03_init = [45, -28];
    const star_04_init = [38, -28];
    const star_05_init = [58, -28];
    const star_06_init = [49, -28];
    const star_07_init = [51, -28];
    const star_08_init = [60, -28];
    const star_09_init = [71, -28];




    const [positionY, setPositionY] = useState(0);
    const [windowW, setWindowW] = useState(0);

    const [wRetio, setWRetio] = useState(1);


    const [bg_01_Y, setBg_01_Y] = useState(bg_01_init);
    const [bg_02_Y, setBg_02_Y] = useState(bg_02_init);
    const [bg_03_Y, setBg_03_Y] = useState(bg_03_init);
    const [woman_01_Y, setWoman_01_Y] = useState(woman_01_init);
    const [table_01_Y, setTable_01_Y] = useState(table_01_init);
    const [clock_01_Y, setClock_01_Y] = useState(clock_01_init);
    const [plant_01_Y, setPlant_01_Y] = useState(plant_01_init);
    const [plant_02_Y, setPlant_02_Y] = useState(plant_02_init);
    const [book_01_Y, setBook_01_Y] = useState(book_01_init);
    const [star_01_Y, setStar_01_Y] = useState(star_01_init);
    const [star_02_Y, setStar_02_Y] = useState(star_02_init);
    const [star_03_Y, setStar_03_Y] = useState(star_03_init);
    const [star_04_Y, setStar_04_Y] = useState(star_04_init);
    const [star_05_Y, setStar_05_Y] = useState(star_05_init);
    const [star_06_Y, setStar_06_Y] = useState(star_06_init);
    const [star_07_Y, setStar_07_Y] = useState(star_07_init);
    const [star_08_Y, setStar_08_Y] = useState(star_08_init);
    const [star_09_Y, setStar_09_Y] = useState(star_09_init);


    useEffect(() => {

        setWindowW(window.innerWidth)
        setWRetio(450 / window.innerWidth)

        const onResize = () => {
            setWRetio(450 / window.innerWidth);
        }


        const onScroll = () => {
            setPositionY(window.pageYOffset);
        }

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };



    }, []);





    useEffect(() => {
        setBg_01_Y(bg_01_init[0] - (positionY * bg_01_init[1] * 0.003 * wRetio))
        setBg_02_Y(bg_02_init[0] - (positionY * bg_02_init[1] * 0.003 * wRetio))
        setBg_03_Y(bg_03_init[0] - (positionY * bg_03_init[1] * 0.003 * wRetio))
        setWoman_01_Y(woman_01_init[0] - (positionY * woman_01_init[1] * 0.003 * wRetio))
        setTable_01_Y(table_01_init[0] - (positionY * table_01_init[1] * 0.003 * wRetio))
        setClock_01_Y(clock_01_init[0] - (positionY * clock_01_init[1] * 0.003 * wRetio))
        setPlant_01_Y(plant_01_init[0] - (positionY * plant_01_init[1] * 0.003 * wRetio))
        setPlant_02_Y(plant_02_init[0] - (positionY * plant_02_init[1] * 0.003 * wRetio))
        setBook_01_Y(book_01_init[0] - (positionY * book_01_init[1] * 0.003 * wRetio))
        setStar_01_Y(star_01_init[0] - (positionY * star_01_init[1] * 0.003 * wRetio))
        setStar_02_Y(star_02_init[0] - (positionY * star_02_init[1] * 0.003 * wRetio))
        setStar_03_Y(star_03_init[0] - (positionY * star_03_init[1] * 0.003 * wRetio))
        setStar_04_Y(star_04_init[0] - (positionY * star_04_init[1] * 0.003 * wRetio))
        setStar_05_Y(star_05_init[0] - (positionY * star_05_init[1] * 0.003 * wRetio))
        setStar_06_Y(star_06_init[0] - (positionY * star_06_init[1] * 0.003 * wRetio))
        setStar_07_Y(star_07_init[0] - (positionY * star_07_init[1] * 0.003 * wRetio))
        setStar_08_Y(star_08_init[0] - (positionY * star_08_init[1] * 0.003 * wRetio))
        setStar_09_Y(star_09_init[0] - (positionY * star_09_init[1] * 0.003 * wRetio))
    }, [positionY]);




    const bgStyle_02 = { top: `${bg_01_Y}%`, };
    const bgStyle_03 = { top: `${bg_02_Y}%`, };
    const bgStyle_04 = { top: `${bg_03_Y}%`, };
    const woman_01 = { top: `${woman_01_Y}%`, };
    const table_01 = { top: `${table_01_Y}%`, };
    const clock_01 = { top: `${clock_01_Y}%`, };
    const plant_01 = { top: `${plant_01_Y}%`, };
    const plant_02 = { top: `${plant_02_Y}%`, };
    const book_01 = { top: `${book_01_Y}%`, };
    const star_01 = { top: `${star_01_Y}%`, };
    const star_02 = { top: `${star_02_Y}%`, };
    const star_03 = { top: `${star_03_Y}%`, };
    const star_04 = { top: `${star_04_Y}%`, };
    const star_05 = { top: `${star_05_Y}%`, };
    const star_06 = { top: `${star_06_Y}%`, };
    const star_07 = { top: `${star_07_Y}%`, };
    const star_08 = { top: `${star_08_Y}%`, };
    const star_09 = { top: `${star_09_Y}%`, };




    return (
        <section className={s.topview} ref={ref}  >

            <div className={s.fix} >{positionY}<br />{windowW}<br />{wRetio}</div>
            {/* <img src="/img/background_01.svg" alt="" /> */}

            <div className={s.wrapper} >

                <img className={s.bg_01} style={bgStyle_02} src="/img/background_02.svg" alt="" />
                <img className={s.bg_02} style={bgStyle_03} src="/img/background_03.svg" alt="" />
                <img className={s.bg_03} style={bgStyle_04} src="/img/background_04.svg" alt="" />

                <img className={s.woman_01} style={woman_01} src="/img/woman_01.svg" alt="" />
                <img className={s.table_01} style={table_01} src="/img/table_01.svg" alt="" />

                <img className={s.clock_01} style={clock_01} src="/img/clock_01.svg" alt="" />
                <img className={s.plant_01} style={plant_01} src="/img/plant_01.svg" alt="" />
                <img className={s.plant_02} style={plant_02} src="/img/plant_02.svg" alt="" />
                <img className={s.book_01} style={book_01} src="/img/book_01.svg" alt="" />

                <img className={s.star_01} style={star_01} src="/img/star.svg" alt="" />
                <img className={s.star_02} style={star_02} src="/img/star.svg" alt="" />
                <img className={s.star_03} style={star_03} src="/img/star.svg" alt="" />
                <img className={s.star_04} style={star_04} src="/img/star.svg" alt="" />
                <img className={s.star_05} style={star_05} src="/img/star.svg" alt="" />
                <img className={s.star_06} style={star_06} src="/img/star.svg" alt="" />
                <img className={s.star_07} style={star_07} src="/img/star.svg" alt="" />
                <img className={s.star_08} style={star_08} src="/img/star.svg" alt="" />
                <img className={s.star_09} style={star_09} src="/img/star.svg" alt="" />

                <div className={s.wordWrapper}>
                    <div className={s.topWord_h2}>
                        <h2>これからサロンを始める</h2>
                        <h2>インストラクターさんへ</h2>
                    </div>
                    <img className={s.mainLogo} src="/img/mainLogo.svg" alt="ヨガ専門" />

                    <div className={s.topWord_h1}>
                        <h1>webサイト・チラシ制作</h1>
                    </div>
                </div>

            </div>







        </section >
    )
}
