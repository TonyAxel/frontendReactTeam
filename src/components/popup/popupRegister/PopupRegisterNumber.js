import {useState} from "react"
import PopupRegisterCode from "./popupRegisterCode";
import {ErrorMessage, Field, Form, Formik} from "formik";
import MaskedInput from "react-text-mask";
import axiosClient from "../../../axiosClient/AxiosClient";

const PopupRegisterNumber = () => {

    const [smsConfirm, setSmsConfirm] = useState(false);


    const showMenuAuth = () => {
        document.documentElement.removeAttribute('show-popup-register', 'true');
        document.documentElement.setAttribute('show-popup-auth', 'true');
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
                                <div className="link_register" onClick={() => showMenuAuth()}>
                                    <a href="/#">Войти</a>
                                </div>
                            </Form>
                        </Formik>
                    </>
                    :
                    <PopupRegisterCode/>
            }
        </>
    )
}

export default PopupRegisterNumber;