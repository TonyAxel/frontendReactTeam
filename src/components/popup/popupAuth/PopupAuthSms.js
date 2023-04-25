import { useState } from "react";
import PopupAuthSmsCode from "./PopupAuthSmsCode";
const PopupAuthSms = () => {

    const [smsConfirm, setSmsConfirm] = useState(false)

    const showMenuRegister = () => {
        document.documentElement.removeAttribute('show-popup-auth', 'true');
        document.documentElement.setAttribute('show-popup-register', 'true');
    }

    return (
        <>
            {
                !smsConfirm ?
                    <>
                        <div className="popup_input_auth" >
                            <div className="input_auth">
                                <input type="submit" value="Продолжить" className="enter" onClick={() => setSmsConfirm(true)} />
                            </div>
                        </div>
                        <div className="link_register" onClick={() => showMenuRegister()}>
                            <a href="/#">Зарегистрироваться</a>
                        </div>
                    </>
                    :
                    <PopupAuthSmsCode/>
            }
        </>
    )
}
export default PopupAuthSms;