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

    const [emailValue, setEmailValue] = useState()
    const [emailRequired, setEmailRequired] = useState(true)
    const [emailValidation, setEmailValidation] = useState(false)

    const [nameValue, setNameValue] = useState()
    const [nameRequired, setNameRequired] = useState(true)
    const [nameValidation, setNameValidation] = useState(false)

    const [messageValue, setMessageValue] = useState()
    const [messageRequired, setMessageRequired] = useState(true)
    const [messageValidation, setMessageValidation] = useState(false)


    useEffect(() => {
        if (isFirstValidation) {
            validate()
        }

    }, [emailValue, nameValue, messageValue])
    //useEffectで随時バリデーション監視


    const validate = () => {

        let result = false; //バリデーションOKかどうか？

        const emailReg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if (emailRequired && !emailValue) {
            setEmailValidation('＊メールアドレスを入力してください')
            result = false;
        } else if (!emailReg.test(emailValue)) {
            setEmailValidation('＊メールアドレスの形式が正しくありません')
            result = false;
        } else {
            setEmailValidation('')
            result = true;
        }

        if (nameRequired && !nameValue) {
            setNameValidation('＊お名前を入力してください')
            result = false;
        } else {
            setNameValidation('')
            result = true;
        }

        if (messageRequired && !messageValue) {
            setMessageValidation('＊メッセージを入力してください')
            result = false;
        } else {
            setMessageValidation('')
            result = true;
        }

        return result
    }


    const onclick = () => {


        setIsFirstValidation(true)
        const vali = validate()


        if (vali) {
            if (!emailValidation &&
                !nameValidation &&
                !messageValidation
            ) { alert('submit') }
        } else {
            alert('nosubmit')
        }

    }


    const handleChangeName = (e) => {
        setNameValue(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessageValue(e.target.value)
    }

    return (
        <section className={s.contact}  >
            <h1>お問い合わせ・申し込み</h1>



            <form action="/form.php" method="post">
                <TextField
                    width={80}
                    borderColor="#E36234"
                    placeholder="お名前またはニックネーム"
                    required={false}
                    name="name"
                    type="text"
                    value={nameValue}
                    onchange={handleChangeName}
                    validation={nameValidation}
                />


                <TextField
                    width={80}
                    borderColor="#ECA71C"
                    placeholder="メールアドレス"
                    required={emailRequired}
                    name="email"
                    type="email"
                    value={emailValue}
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
                    value={messageValue}
                    onchange={handleChangeMessage}
                    validation={messageValidation}
                />


                <Button
                    text="お申し込み＆お問合わせ"
                    width="70vw"
                    bgColor={s.bc_blue}
                    onclick={onclick}
                />




            </form>
        </section >
    )
}
