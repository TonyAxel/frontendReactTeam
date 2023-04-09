import {Link} from "react-router-dom";

const LeftPopupMenu = qualifiedName => {

    const closeLeftMenu = () =>{
        document.documentElement.removeAttribute('show-menu-left', 'true');
        document.documentElement.removeAttribute('show-popup-auth', 'true');
        document.documentElement.removeAttribute('show-popup-register', 'true');
        document.documentElement.removeAttribute('show-popup-category', 'true')
    }

    const showMenuRegister = () => {
        document.documentElement.removeAttribute('show-popup-auth', 'true');
        document.documentElement.setAttribute('show-popup-register', 'true');
    }

    const showMenuAuth = () => {
        document.documentElement.removeAttribute('show-popup-register', 'true');
        document.documentElement.setAttribute('show-popup-auth', 'true');
    }

    return (
        <>
            <div className="popup">
                <div className="popup__menu">
                    <div className="popup_header">
                        <div className="close">
                            <div className="icon_close" onClick={() => closeLeftMenu()}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="authentication">
                            <div className="icon_person">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </div>
                            <div className="information">
                                <>
                                    <Link to={"#"} onClick={() => showMenuAuth()} >Войти </Link>
                                    |
                                    <Link to={'#'} onClick={() => showMenuRegister()}> Регистрация</Link>
                                </>
                                <>
                                    <p>Авторизуйтесь для получения расширенных возможностей</p>
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="popup_main">
                        <div className="content">
                            <div className="icon_content">
                                <div className="icon_cart" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="black" className="bi bi-basket3" viewBox="0 0 20 20">
                                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                                    </svg>
                                </div>
                                <div className="label_content_item">
                                    <p>Каталог</p>
                                </div>
                            </div>
                            <div className="icon_content">
                                <div className="icon_like">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </div>
                                <div className="label_content_item">
                                    <p>Избранное</p>
                                </div>
                            </div>
                            <div className="icon_content">
                                <div className="icon_info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>
                                </div>
                                <div className="label_content_item">
                                    <p>Справочный центр</p>
                                </div>
                            </div>
                            <div className="icon_content" style={{ paddingBottom: '20px', borderBottom: '1px solid #CFCFCF' }}>
                                <div className="icon_cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </div>
                                <div className="label_content_item">
                                    <p>Корзина</p>
                                </div>
                            </div>
                            <div className="donate_help">
                                <p>Помощь</p>
                                <a href="/#">Оплата</a>
                            </div>
                            <div className="information_company">
                                <p>Информация о компании</p>
                                <a href="/#">Политика конфиденциальности</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layouts_black" onClick={() => closeLeftMenu()}></div>
        </>
    )
}
export default LeftPopupMenu;