
const PopupAuthPassword = () => {

    return (
        <>
            <div className="popup_input_auth">
                <div className="input_auth">
                    <input type="text" placeholder="Номер телефона (+7)" />
                    <input type="text" placeholder="Пароль" />
                    <div className="input_auth_remember">
                        <input type="checkbox" name="selectme" id="selectme" /> <p>Запомнить меня</p>
                    </div>
                    <input type="submit" value="Войти" className="enter" />
                </div>
            </div>
            <div className="link_register">
                <a href="/#">Зарегистрироваться</a>
            </div>
        </>
    )
}

export default PopupAuthPassword;