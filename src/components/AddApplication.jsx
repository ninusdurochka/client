import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/httpHook";
import {toast} from "react-toastify";
import {json} from "react-router-dom";

export const AddApplication = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [full_name, setFullName] = useState('')
    const [university, setUniversity] = useState('')
    const [report, setReport] = useState('')
    const [authors, setAuthors] = useState('')
    const [supervisor, setSupervisor] = useState('')
    const [conference, setConference] = useState('')
    const [direction, setDirection] = useState('')
    const [language, setLanguage] = useState('')
    const [theses, setTheses] = useState('')
    const [article, setArticle] = useState('')

    const notify = (message) => toast(message);

    useEffect(() => {
        notify(error)
        clearError()
    }, [error, notify, clearError])


    const handleArticleChange = (event) => {
        const file = event.target.files[0]
        setArticle(file)
        console.log("file:", file)
    };

    const handleThesesChange = (event) => {
        const file = event.target.files[0]
        setTheses(file)
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("full_name", full_name)
        formData.append("university", university)
        formData.append("report", report)
        formData.append("authors", authors)
        formData.append("supervisor", supervisor)
        formData.append("conference", conference)
        formData.append("direction", direction)
        formData.append("language", language)
        formData.append("article", article)
        formData.append("theses", theses)
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
        const response = await fetch('api/profile/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data;'
            },
            body: formData
        })
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Что-то пошло не так')
        }

        console.log(data)
        // fetch("/submit-form", {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data))
        //     .catch((error) => console.error(error));
    }


    return (
        <div className='container min-h-screen flex flex-row justify-between mt-5 pt-6 mb-10 w-full'>
            <div className='w-full ml-20 mr-20'>
                <form
                    onSubmit={handleSubmit}
                    className='w-full h-60 pr-40 pl-10 mt-0'
                >
                    <div className='w-2/3 mr-20 mb-4'>
                        <label className='text-s text-black '>
                            ФИО докладчика:
                            <input
                                type='text'
                                placeholder='Иванов Иван Иванович'
                                className='mt-1.5  text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                                name="full_name"
                                value={full_name}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                        </label>
                    </div>
                    <label htmlFor='university' className='text-s text-black'>
                        Название организации (ВУЗа):
                        <select
                            name="university"
                            value={university}
                            onChange={(event) => setUniversity(event.target.value)}
                            className="mb-4 mt-1.5 bg-gray-50 border text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Выберите организацию из списка</option>
                            <option value="ITMO">ИТМО</option>
                            <option value="HSE">Высшая школа экономики</option>
                            <option value="Polytech">Политехнический университет</option>
                            <option value="RANH">РАНХиГС</option>
                        </select>
                    </label>


                    <label className='text-s text-black'>
                        Название доклада:
                        <input
                            type='text'
                            placeholder='Введите название доклада'
                            className='mb-4 mt-1.5 text-black w-full rounded-lg bg-white border py-1 px-2 text-s outline-none'
                            name="report"
                            value={report}
                            onChange={(event) => setReport(event.target.value)}
                        />
                    </label>

                    <label className='text-s text-black'>
                        Список соавторов:
                        <select
                            name="authors"
                            value={authors}
                            onChange={(event) => setAuthors(event.target.value)}
                            className="mb-4 mt-1.5 bg-gray-50 border text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Выберите соавторов</option>
                            <option value="Булкин Вася">Булкин Вася</option>
                            <option value="Пончиков Леша">Пончиков Леша</option>
                            <option value="Конфеткина Анастасия">Конфеткина Анастасия</option>
                            <option value="Яблонева Вика">Яблонева Вика</option>
                        </select>
                    </label>

                    <label className='text-s text-black'>
                        Научный руководитель:
                        <select
                            name="supervisor"
                            value={supervisor}
                            onChange={(event) => setSupervisor(event.target.value)}
                            className="mb-4 mt-1.5 bg-gray-50 border text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Выберите научного руководителя</option>
                            <option value="Булкин Вася">Булкин Вася</option>
                            <option value="Пончиков Леша">Пончиков Леша</option>
                            <option value="Конфеткина Анастасия">Конфеткина Анастасия</option>
                            <option value="Яблонева Вика">Яблонева Вика</option>
                        </select>
                    </label>

                    <div className='flex flex-row justify-between'>
                        <label className='text-s text-black w-1/2 mr-5'>
                            Конференция:
                            <select
                                name="conference"
                                value={conference}
                                onChange={(event) => setConference(event.target.value)}
                                className="mb-4 mt-1.5 bg-gray-50 border text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Конгресс молодых ученых</option>
                                <option value="Конференция 1">Конференция 1</option>
                                <option value="Конференция 2">Конференция 2</option>
                                <option value="Конференция 3">Конференция 3</option>
                                <option value="Конференция 4">Конференция 4</option>
                            </select>
                        </label>

                        <label className='text-s text-black w-1/2 ml-5'>
                            Направление конференции:
                            <select
                                name="direction"
                                value={direction}
                                onChange={(event) => setDirection(event.target.value)}
                                className="mb-4 mt-1.5 bg-gray-50 border text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="Направление 1" selected>Направление 1</option>
                                <option value="Направление 2">Направление 2</option>
                                <option value="Направление 3">Направление 3</option>
                                <option value="Направление 4">Направление 4</option>
                            </select>
                        </label>
                    </div>
                    <label className='text-s text-black'>
                        Язык выступления:
                        <select
                            name="language"
                            value={language}
                            onChange={(event) => setLanguage(event.target.value)}
                            className="mb-4 mt-1.5 bg-gray-50 border text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="RU" selected>Русский</option>
                            <option value="EN">Английский</option>
                            <option value="CH">Китайский</option>
                        </select>
                    </label>

                    <div className='flex flex-row justify-between mb-4 mt-1.5'>
                        <div className='w-1/2 mr-5'>
                            <p>Тезисы доклада</p>
                            <label
                                className='border-dashed text-black py-2 bg-white text-xs mt-2 flex items-center justify-center border rounded-lg cursor-pointer'>
                                Загрузить файл (.docx)
                                <input
                                    type='file'
                                    name='theses'
                                    onChange={handleThesesChange}
                                    className='hidden'
                                />
                            </label>
                        </div>

                        <div className='w-1/2 ml-5 mb-4'>
                            <p>Статья</p>
                            <label
                                className='border-dashed text-black py-2 bg-white text-xs mt-2 flex items-center justify-center border rounded-lg cursor-pointer'>
                                Загрузить файл (.docx)
                                <input
                                    type='file'
                                    name='article'
                                    onChange={handleArticleChange}
                                    className='hidden'
                                />
                            </label>
                        </div>
                    </div>

                    <div className='flex gap-8 justify-center mt-4'>
                        <button type='submit'
                                className='flex border justify-center items-center text-m text-black rounded-lg py-2 px-4'>
                            Подать заявку
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )
}
