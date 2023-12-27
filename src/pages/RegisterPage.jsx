import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/httpHook";
import {toast} from "react-toastify";

export const RegisterPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        full_name: '', email: '', phone: '', university: '', city: '', password: '',
    })
    const notify = (message) => toast(message);

    useEffect(() => {
        notify(error)
        clearError()
    }, [error, notify, clearError])


    const registerHandler = async () => {
        try {
            const data = await request('/api/user/registration', 'POST', {...form})
            notify(data.message)
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
                className='w-1/4 h-60 mx-auto mt-40'
            >
                <h1 className='text-3xl text-black text-center'>Регистрация</h1>
                <label className='text-s text-black'>
                    ФИО:
                    <input
                        type='text'
                        placeholder='Иванов Иван Иванович'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="full_name"
                        value={form.full_name}
                        onChange={changeHandler}
                    />
                </label>

                <label className='text-s text-black'>
                    Почта:
                    <input
                        type='text'
                        placeholder='Введите почту'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="email"
                        value={form.email}
                        onChange={changeHandler}
                    />
                </label>

                <label className='text-s text-black'>
                    Номер телефона:
                    <input
                        type='text'
                        placeholder='Введите номер телефона'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="phone"
                        value={form.phone}
                        onChange={changeHandler}
                    />
                </label>

                <label className='text-s text-black'>
                    Университет:
                    <input
                        type='text'
                        placeholder='Введите название университета'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="university"
                        value={form.university}
                        onChange={changeHandler}
                    />
                </label>

                <label className='text-s text-black'>
                    Город:
                    <input
                        type='text'
                        placeholder='Введите название города'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="city"
                        value={form.city}
                        onChange={changeHandler}
                    />
                </label>

                <label className='text-s text-black'>
                    Пароль:
                    <input
                        type='password'
                        placeholder='Введите пароль'
                        className='mt-1 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                        name="password"
                        value={form.password}
                        onChange={changeHandler}
                    />
                </label>

                <div className='flex gap-8 justify-center mt-4'>
                    <button type='submit'
                            className='flex border justify-center items-center text-m text-black rounded-lg py-2 px-4'
                            onClick={registerHandler}>
                        Регистрация
                    </button>
                </div>
            </form>
        </div>
    )
}