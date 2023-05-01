import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";

const PageProfile = () => {

    const [phone, setPhone] = useState('');
    return (
        <div className="page_content">
            <div className="profile">
                <div className="profile_hi">
                    <h2>Добро пожаловать, пользователь!</h2>
                </div>
                <div className="profile_placeholder-phone">
                    <p>Ваш текущий номер телефона +7 777 77 77</p>
                    <p>После ввода номера телефона, его нужно будет подтвердить</p>
                </div>
                <Formik
                    initialValues={
                        {
                            old_phone: '',
                            new_phone: ''
                        }
                    }
                    onSubmit={
                        ({phone, new_phone}) => {

                        }
                    }
                >
                    <Form>
                        <div className="profile_phones">
                            <Field name="old_phone" className="profile_phones_old-phone" placeholder="Введите старый номер телефона"/>
                            <Field name="new_phone" className="profile_phones_new-phone" placeholder="Введите новый номер телефона"/>
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
                    initialValues={
                        {
                            name: ''
                        }
                    }
                    onSubmit={
                        ({name}) => {

                        }
                    }
                >
                    <Form>
                        <div className="profile_name">
                            <p>Изменить (создать) имя пользователя</p>
                            <Field name="name" className="profile_name_name" placeholder="Введите имя пользователя"/>
                            <button>Создать</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default PageProfile;
