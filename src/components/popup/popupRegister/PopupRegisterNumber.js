import { useState } from "react"
import PopupAuthSmsCode from "../popupAuth/PopupAuthSmsCode";

const PopupRegisterNumber = () => {

    const [smsConfirm, setSmsConfirm] = useState(false)

    const showMenuAuth = () => {
        document.documentElement.removeAttribute('show-popup-register', 'true');
        document.documentElement.setAttribute('show-popup-auth', 'true');
    }

    return (
        <>
            {
                !smsConfirm ?
                    <>
                        <div className="popup_input_auth" >
                            <div className="input_auth">
                                <input type="text" placeholder="Номер телефона (+7)" />
                                <input type="submit" value="Продолжить" className="enter" onClick={() => setSmsConfirm(true)} />
                            </div>
                        </div>
                        <div className="link_register" onClick={() => showMenuAuth()}>
                            <a href="/#">Войти</a>
                        </div>
                    </>
                    :
                    <PopupAuthSmsCode/>
            }
        </>
    )
}

export default PopupRegisterNumber;