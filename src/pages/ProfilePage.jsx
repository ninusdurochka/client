import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/httpHook";
import {toast} from "react-toastify";
import {NavLink} from "react-router-dom";
import {AddApplication} from "../components/AddApplication";
import {ProfileMain} from "../components/ProfileMain";

export const ProfilePage = () => {

    const [tab, setTab] = useState('application')


    return <div className='container min-h-screen w-full flex flex-row justify-between mx-auto pt-6'>
        <span className='text-left w-1/6'>
            <h1 className='text-3xl font-semibold pb-5'>Профиль</h1>
            <ul>
                <li className='flex flex-row justify-start items-center py-4'>
                    <div className='bg-gray-200 rounded-full w-4 h-4 mr-1'></div>
                   <button onClick={() => (
                       setTab('main')
                   )}>Главная</button>
                </li>
                <li className='flex flex-row items-center py-4'>
                    <div className='bg-gray-200 rounded-full w-4 h-4 mr-1'></div>
                   <button className='w-full text-left' onClick={() => setTab('data')}>Личные данные</button>
                </li>
                <li className='flex flex-row items-center py-4'>
                    <div className='bg-gray-200 rounded-full w-4 h-4 mr-1'></div>
                   <button onClick={() => setTab('publications')}>Мои публикации</button>
                </li>
                <li className='flex flex-row items-center py-4'>
                    <div className='bg-gray-200 rounded-full w-4 h-4 mr-1'></div>
                   <button onClick={() => setTab('application')}>Подача заявки</button>
                </li>
                <li className='flex flex-row items-center py-4'>
                    <div className='bg-gray-200 rounded-full w-4 h-4 mr-1'></div>
                   <button onClick={() => setTab('services')}>Сервисы</button>
                </li>
            </ul>
        </span>

        {tab === 'application' && (
            <>
                <AddApplication/>
            </>
        )}

        {tab === 'main' && (
            <>
                <ProfileMain/>
            </>
        )}


    </div>
}