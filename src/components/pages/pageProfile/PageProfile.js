import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import AxiosClient from "../../../axiosClient/AxiosClient";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../../store/AuthSlice";
import MaskedInput from "react-text-mask";

const PageProfile = () => {

    const {user} = useSelector(state => state.authReducer)
    const dispatch = useDispatch();

    return (
        <div className="page_content">
            <div className="profile">
                <div className="profile_hi">
                    <h2>Добро пожаловать, пользователь!</h2>
                </div>
                <div className="profile_placeholder-phone">
                    <p>Ваш текущий номер телефона {user.phone}</p>
                    <p>После ввода номера телефона, его нужно будет подтвердить</p>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={
                        {
                            old_phone: `${user.phone}`,
                            new_phone: ''
                        }
                    }

                    validate={
                        (values) => {
                            const errors = {};
                            if (!values.new_phone) {
                                errors.new_phone = 'Обязательное поле'
                            } else if (values.new_phone.replace(/[-+()\s_]/g, '').length !== 11) {
                                errors.new_phone = 'Введите номер телефона полностью';
                            }

                            if (!values.old_phone) {
                                errors.old_phone = 'Обязательное поле'
                            } else if (values.old_phone.replace(/[-+()\s_]/g, '').length !== 11) {
                                errors.old_phone = 'Введите номер телефона полностью';
                            }


                            return errors;
                        }
                    }
                    onSubmit={
                        ({new_phone}) => {
                            localStorage.setItem('new_phone', new_phone.replace(/[-+()\s_]/g, ''))
                            AxiosClient.post('/sendCode', {phone: new_phone.replace(/[-+()\s_]/g, '')})
                        }
                    }
                >
                    <Form>
                        <div className="profile_phones">
                            <Field name="old_phone" className="profile_phones_old-phone" placeholder="Введите старый номер телефона"/>
                            <Field
                                name="new_phone"
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
                                        className="profile_phones_new-phone"
                                    />
                                )}
                            />
                            <ErrorMessage name={"new_phone"}/>
                            <button>Получить СМС</button>
                        </div>
                    </Form>
                </Formik>

                <Formik
                    initialValues={
                        {
                            code: ''
                        }
                    }
                    onSubmit={
                        ({code}) => {
                            AxiosClient.post('/changePhoneUser',
                                {phone: localStorage.getItem('new_phone'),code: code})
                                .then((res) => {
                                    AxiosClient.get('/user').then(r => dispatch(setUser(r.data)))
                                })
                        }
                    }
                >
                    <Form>
                        <div className="profile_code">
                            <Field name="code" className="profile_code_code" placeholder="Введите код из СМС"/>
                            <button>Подтвердить изменение номера</button>
                        </div>
                    </Form>
                </Formik>

                <Formik
                    enableReinitialize
                    initialValues={
                        {
                            name: `${user.name_customer}`
                        }
                    }
                    onSubmit={
                        ({name}) => {
                            AxiosClient.post('/addNameUser', {name: name})
                                .then((res) => {
                                    AxiosClient.get('/user').then(r => dispatch(setUser(r.data)))
                                })
                        }
                    }
                >
                    <Form>
                        <div className="profile_name">
                            <p>Изменить (создать) имя пользователя</p>
                            <Field name="name" className="profile_name_name" placeholder="Введите имя пользователя"/>
                            <button type='submit' >Создать</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default PageProfile;
