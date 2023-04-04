import { useState } from "react";
import PopupAuthPassword from "./PopupAuthPassword";
import PopupAuthSms from "./PopupAuthSms";

const PopupAuth = () => {

    const [authSelect, setAuthSelect] = useState(true)

    const closeAuthMenu = () => {
        document.documentElement.removeAttribute('show-popup-auth', 'true');
    }

    return (
        <>
            <div className="popup_auth">
                <div className="popup_header_auth">
                    <div className="popup_label">
                        Вход
                    </div>
                    <div className="popup_close">
                        <div className="icon_close" onClick={() => closeAuthMenu()}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="popup_body">
                    <div className="popup_auth_select">
                        <div className="auth_select">
                            <div className="select_password" onClick={() => setAuthSelect(true)} style={authSelect ? { color: 'white', backgroundColor: '#1B81BA' } : null}>
                                Пароль
                            </div>
                            <div className="select_sms" onClick={() => setAuthSelect(false)} style={!authSelect ? { color: 'white', backgroundColor: '#1B81BA' } : null} >
                                СМС
                            </div>
                        </div>
                    </div>
                    {
                        authSelect ? <PopupAuthPassword /> : <PopupAuthSms />
                    }

                </div>
            </div>
        </>
    )
}

export default PopupAuth;