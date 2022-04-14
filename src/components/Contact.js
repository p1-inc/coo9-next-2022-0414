/* eslint-disable */
import { useState, useEffect, useRef } from 'react';




import s from './Main.module.scss'
import Button from './layoutComp/Button';
import SubmitButton from './layoutComp/SubmitButton';
import TextField from './layoutComp/TextField';
import TextArea from './layoutComp/TextArea';

export default function Contact() {

    const [isFirstValidation, setIsFirstValidation] = useState(false)
    //初回submitしているかどうか？1度submitしていたらバリデーションをリアルタイムでかける


    const [emailState, setEmailState] = useState({
        value: '',
        required: true,
    })
    const [emailValidation, setEmailValidation] = useState('')
    //validationの中が空だったらOKで、メッセージが入ったらERRです


    const [nameState, setNameState] = useState({
        value: '',
        required: true,
    })
    const [nameValidation, setNameValidation] = useState(false)



    const [messageState, setMessageState] = useState({
        value: '',
        required: true,
    })

    const [messageValidation, setMessageValidation] = useState(false)

    const [showDialog, setShowDialog] = useState(false)


    useEffect(() => {
        if (isFirstValidation) {
            validate()
        }
    }, [emailState.value, nameState.value, messageState.value])
    //useEffectで随時バリデーション監視


    const validate = () => {

        let valiErr = false;

        if (nameState.required && !nameState.value) {
            setNameValidation('＊お名前を入力してください')
            valiErr = true;
        } else {
            setNameValidation('')
            let valiErr = false;
        }

        const emailReg = new RegExp(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/);
        if (emailState.required && !emailState.value) {
            setEmailValidation('＊メールアドレスを入力してください')
            valiErr = true;
        } else if (!emailReg.test(emailState.value)) {
            setEmailValidation('＊メールアドレスの形式が正しくありません')
            valiErr = true;
        } else {
            setEmailValidation('')
            let valiErr = false;
        }

        if (messageState.required && !messageState.value) {
            setMessageValidation('＊メッセージを入力してください')
            valiErr = true;
        } else {
            setMessageValidation('')
            let valiErr = false;
        }

        return valiErr

    }


    const onclick = () => {

        setIsFirstValidation(true)
        const valiErr = validate()

        if (!valiErr) {
            if (!emailValidation &&
                !nameValidation &&
                !messageValidation
            ) {

                setShowDialog(true)

            }
        } else {

        }
    }


    const handleChangeName = (e) => {
        setNameState({ ...nameState, value: e.target.value })
    }

    const handleChangeEmail = (e) => {
        setEmailState({ ...emailState, value: e.target.value })
    }

    const handleChangeMessage = (e) => {
        setMessageState({ ...messageState, value: e.target.value })
    }


    const handledialogClose = () => {
        setShowDialog(false)
    }


    return (

        <section className={s.contact}  >
            <h1>お問い合わせ・申し込み</h1>

            <TextField
                width={80}
                borderColor="#E36234"
                placeholder="お名前またはニックネーム"
                required={false}
                name="name"
                type="text"
                value={nameState.value}
                onchange={handleChangeName}
                validation={nameValidation}
            />


            <TextField
                width={80}
                borderColor="#ECA71C"
                placeholder="メールアドレス"
                required={emailState.required}
                name="email"
                type="email"
                value={emailState.value}
                onchange={handleChangeEmail}
                validation={emailValidation}
            />

            <TextArea
                width={80}
                borderColor="#5EBC92"
                placeholder="お問合せ内容"
                required={false}
                name="text"
                type="text"
                value={messageState.value}
                onchange={handleChangeMessage}
                validation={messageValidation}
            />


            <Button
                text="お申し込み＆お問合わせ"
                width="70vw"
                bgColor={s.bc_blue}
                onclick={onclick}
            />



            <div className={`${s.dialogContact} showDialogStyle`}>
                <div className={s.background} onClick={handledialogClose}></div>
                <div className={s.messageWrapper}>
                    <h2>お問合せありがとうございます</h2>
                    <p>
                        <span>ご入力いただいたメールアドレスに</span><span>自動返信メールをお送りいたしました。 </span><br />
                        <span>万一届かない場合は、メールアドレスが</span><span>間違っていた場合が考えられます。</span><br />
                        <span>もう一度CONTACTフォームからご入力いただけるか、</span><span>大変お手数ですが下記メールまでお問合せ内容をお送りください</span><br />
                        contact@coo9.jp
                    </p>

                    <div className={s.closeBtn} onClick={handledialogClose}></div>
                </div>


            </div>



            <style jsx>{`

            .showDialogStyle {
                visibility:${showDialog ? 'visible' : 'hidden'} ;
                opacity:${showDialog ? 1 : 0} ;
                transition: .2s;
            }

            `}</style>



        </section >

    )
}
