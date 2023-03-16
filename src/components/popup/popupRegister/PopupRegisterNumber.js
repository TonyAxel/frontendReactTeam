import { useState } from "react"
import PopupAuthSmsCode from "../popupAuth/PopupAuthSmsCode";

const PopupRegisterNumber = () => {

    const [smsConfirm, setSmsConfirm] = useState(false)

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
                        <div className="link_register">
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