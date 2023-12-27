import React, {useContext, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import './Navbar.css'
import list from './list.json'
import {AuthContext} from "../../context/AuthContext";


export const Navbar = () => {

    const auth = useContext(AuthContext)

    const activeStyles = {
        color: 'gray'
    }

    const logoutHandler = () => {
        try {
            auth.logout()
        } catch (e) {
        }
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex py-4 justify-between items-center mx-auto'>
            <span className='flex justify-center items-center w-50 h-6 text-white rounded-sm ml-10'>
                <div className='bg-black rounded-full w-8 h-8 mr-1'></div>
                    <NavLink
                        to={'/'}
                        href='/'
                        className='lg:text-xl md:text-xs text-black font-medium'>
                        Студ<br/>
                        Наука
                    </NavLink>
            </span>
            <ul className='flex w-auto gap-8'>
                <li>
                    <NavLink
                        to={'/events'}
                        href='/'
                        className='lg:text-base md:text-xs text-black hover:text-gray-600 font-medium'
                        style={({isActive}) => isActive ? activeStyles : undefined}>
                        Мероприятия
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/profile'}
                        href='/'
                        className='lg:text-base md:text-xs text-black hover:text-gray-600 font-medium'
                        style={({isActive}) => isActive ? activeStyles : undefined}>
                        Новости
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/'}
                        href='/'
                        className='lg:text-base md:text-xs text-black hover:text-gray-600 font-medium'
                        style={({isActive}) => isActive ? activeStyles : undefined}>
                        Конкурсы
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/'}
                        href='/'
                        className='lg:text-base md:text-xs text-black hover:text-gray-600 font-medium'
                        style={({isActive}) => isActive ? activeStyles : undefined}>
                        Исследователям других вузов
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/'}
                        href='/'
                        className='lg:text-base md:text-xs text-black hover:text-gray-600 font-medium'
                        style={({isActive}) => isActive ? activeStyles : undefined}>
                        Сообщество (СНО)
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/'}
                        href='/'
                        className='lg:text-base md:text-xs text-black hover:text-gray-600 font-medium'
                        style={({isActive}) => isActive ? activeStyles : undefined}>
                        Контакты
                    </NavLink>
                </li>
            </ul>
            {!auth.isAuthenticated && (
                <span className='flex justify-center items-center w-50 h-6 text-white rounded-sm ml-10 mr-10'>
                {/*<div className='bg-black rounded-full w-8 h-8'></div>*/}
                    <NavLink
                        to={'/login'}
                        href='/login'
                        className='text-l md:text-xs text-black font-medium mr-5'>
                        Войти
                    </NavLink>
            </span>
            )}
            {auth.isAuthenticated && (
                <div className='flex justify-center items-center w-40 pr-5'>
                    <div
                        className='relative flex flex-col justify-center items-center text-xs text-white px-4 py-2 h-10 rounded-full w-1/6'>
                        <button className='h-10 w-10' onClick={() => setIsOpen((prev) => !prev)}>
                            <CgProfile className='h-10 w-10 bg-black rounded-full'/>
                        </button>

                        {isOpen && (
                            <div
                                className='absolute top-10 flex flex-col items-start p-2 rounded-lg border border-black bg-white w-40 h-50'>
                                <div
                                    className='flex flex-col justify-between w-30 cursor-pointer border-l-transparent'>
                                    <NavLink
                                        to='/profile'
                                        href='/profile'
                                        className='text-xs text-black hover:text-blue-600'>
                                        Личный кабинет
                                    </NavLink>
                                    <NavLink
                                        onClick={logoutHandler}
                                        to='/'
                                        href='/'
                                        className='text-xs text-black hover:text-blue-600'>
                                        Выйти
                                    </NavLink>
                                </div>
                                )
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}