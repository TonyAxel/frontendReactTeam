import { useState } from "react";
import PopupAuthSmsCode from "./PopupAuthSmsCode";
import {Formik, Form, Field, ErrorMessage} from "formik";
import axiosClient from "../../../axiosClient/AxiosClient";
import MaskedInput from "react-text-mask";
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
                        <Formik
                            initialValues={
                                {
                                    phone: ""
                                }
                            }
                            validate={
                                (values) => {
                                    const errors = {};
                                    if (!values.phone) {
                                        errors.phone = 'Обязательное поле'
                                    } else if (values.phone.replace(/[-+()\s_]/g, '').length !== 11) {
                                        errors.phone = 'Введите номер телефона полностью';
                                    }

                                    return errors;
                                }
                            }
                            onSubmit={
                                (values) => {
                                    localStorage.setItem('phone', values.phone.replace(/[-+()\s_]/g, ''))
                                    axiosClient.post('/sendCode', {phone: values.phone.replace(/[-+()\s_]/g, '')})
                                        .then(r => setSmsConfirm(true))
                                }
                            }
                        >
                            <Form>
                                <div className="popup_input_auth">
                                    <div className="input_auth">
                                        <Field
                                            name="phone"
                                            render={({field}) => (
                                                <MaskedInput
                                                    {...field}
                                                    mask={["+", "7", "(", /[1-9]/, /\d/, /\d/, ")", " ",
                                                        /\d/, /\d/, /\d/, "-",
                                                        /\d/, /\d/, "-", /\d/, /\d/
                                                    ]}
                                                    id="phone"
                                                    placeholder="Введите свой номер телефона"
                                                    type="text"
                                                />
                                            )}
                                        />
                                        <ErrorMessage name={"phone"}/>
                                        <input type="submit" value="Продолжить" className="enter"/>
                                    </div>
                                </div>

                            </Form>
                        </Formik>
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