import {useState} from "react"
import PopupRegisterCode from "./popupRegisterCode";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import MaskedInput from "react-text-mask";

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
                        <Formik
                            initialValues={
                                {
                                    phone: ""
                                }
                            }
                            validationSchema={
                                Yup.object({
                                    phone: Yup.string().required("Введите телефон.")
                                })
                            }
                            onSubmit={
                                (value) => {
                                    if(value.phone.replace(/[-+()\s_]/g, '').length === 11){
                                        setSmsConfirm(true)
                                    }
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
                                                    mask={["+","7", "(", /[1-9]/, /\d/, /\d/, ")", " ",
                                                            /\d/, /\d/, /\d/, "-",
                                                            /\d/, /\d/,"-", /\d/, /\d/
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