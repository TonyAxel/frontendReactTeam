import { useState } from "react";
import PopupAuthSmsCode from "./PopupAuthSmsCode";

const PopupAuthSms = () => {

    const [smsConfirm, setSmsConfirm] = useState(false)

    return (
        <>
            {
                !smsConfirm ?
                    <>
                        <div className="popup_input_auth" >
                            <div className="input_auth">
                                <input type="text" placeholder="Номер телефона (+7)" />
                                <div className="input_auth_remember">
                                    <input type="checkbox" name="selectme" id="selectme" /> <p>Запомнить меня</p>
                                </div>
                                <input type="submit" value="Продолжить" className="enter" onClick={() => setSmsConfirm(true)} />
                            </div>
                        </div>
                        <div className="link_register">
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