
const PopupAuthSmsCode = () => {
    return (
        <>
            <div className="popup_input_auth">
                <div className="input_auth">
                    <div style={{fontSize: 15, lineHeight: '1', marginTop: '10px'}}>
                        На номер телефона который вы указали должен был прийти код
                    </div>
                    <input type="text" placeholder="Код" />
                    <input type="submit" value="Войти" className="enter" />
                </div>
            </div>
        </>
    )
}
export default PopupAuthSmsCode;