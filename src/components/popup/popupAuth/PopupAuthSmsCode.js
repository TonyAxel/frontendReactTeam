import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import AxiosClient from "../../../axiosClient/AxiosClient";
import {setUser} from "../../../store/AuthSlice";
import {useDispatch} from "react-redux";
const PopupAuthSmsCode = () => {

    const dispatch = useDispatch();

    const closeAuthMenu = () => {
        document.documentElement.removeAttribute('show-popup-auth', 'true');
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        code: ''
                    }
                }
                validationSchema={
                    Yup.object({
                        code: Yup.string().required('Введите код')
                    })
                }
                onSubmit={
                    (values) => {
                        AxiosClient.post('/login', {
                            code: values.code,
                            phone: localStorage.getItem('phone')
                        }).then(
                            (res) => {
                                localStorage.setItem('ACCESS_TOKEN', res.data[1]);
                                dispatch(setUser(res.data[0]))
                                closeAuthMenu()
                            }
                        )
                    }
                }
            >
                <Form>
                    <div className="popup_input_auth">
                        <div className="input_auth">
                            <div style={{fontSize: 15, lineHeight: '1', marginTop: '10px'}}>
                                На номер телефона который вы указали должен был прийти код
                            </div>
                            <Field type="text" placeholder="Код" name="code" />
                            <ErrorMessage name="code"/>
                            <input type="submit" value="Войти" className="enter" />
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default PopupAuthSmsCode;