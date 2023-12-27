import React, {useContext, useEffect, useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/httpHook";

export const LoginPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const notify = (message) => toast(message);
    useEffect(() => {
        notify(error)
        clearError()
    }, [error, notify, clearError])


    const loginHandler = async () => {
        try {
            const data = await request('/api/user/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className='min-h-screen'>
            <form
                onSubmit={event => event.preventDefault()}
                className='w-1/2 h-60 mx-auto mt-40'
            >
                <h1 className='text-3xl text-black text-center'>Авторизация</h1>
                <label className='text-s text-black'>
                    Почта:
                    <input
                        type='text'
                        placeholder='Email'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="email"
                        value={form.email}
                        onChange={changeHandler}
                    />
                </label>

                <label className='text-s text-black'>
                    Пароль:
                    <input
                        type='password'
                        placeholder='Password'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="password"
                        value={form.password}
                        onChange={changeHandler}
                    />
                </label>

                <div className='flex gap-8 justify-center mt-4'>
                    <Link to='/'
                          type='submit'
                          className='flex border justify-center items-center text-m text-black rounded-lg py-2 px-4'
                          onClick={loginHandler}
                    >
                        Войти
                    </Link>
                    <Link to='/register'
                          className='flex border justify-center items-center text-m text-black rounded-lg py-2 px-4'>
                        Регистрация
                    </Link>
                </div>
            </form>
        </div>
    )
}