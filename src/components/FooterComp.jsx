import { Footer } from 'flowbite-react';
import React from "react";

export const FooterComp = () => {
    return (
        <Footer container className='mt-auto bg-gray-200 rounded-t-3xl mx-auto'>
            <div className="flex flex-row justify-between w-full text-center mb-0">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <span className='text-left'>
                        <p className='lg:text-s md:text-xs'>Учебный центр студенческой науки,<br/> конференций и выставок ИТМО</p>
                        <p className='lg:text-xl md:text-xs font-medium my-4'>8 (812) 480-10-91<br/>8 (812) 480-10-92</p>
                        <p className='lg:text-s md:text-xs font-medium'>csn@itmo.ru</p>
                        <p className='lg:text-xs md:text-xs font-medium mb-4'>Кронверкский конспект, д. 49, лит. А, ауд. 2302</p>
                        <p className='lg:text-s md:text-xs' >Время приема</p>
                        <p className='lg:text-xl md:text-xs font-medium'>11:00 - 18:00</p>
                    </span>
                    <div className='flex flex-row-reverse'>
                        <Footer.LinkGroup col className='text-left mt-0 px-4'>
                            <h3 className='text-xl font-medium  text-black mt-0 mb-0'>Ресурсы</h3>
                            <Footer.Link href="/">Конкурсы и гранты</Footer.Link>
                            <Footer.Link href="/">Конференции</Footer.Link>
                            <Footer.Link href="/">Сообщество (СНО)</Footer.Link>
                            <Footer.Link href="/">Новости</Footer.Link>
                            <Footer.Link href="/">НИРМА</Footer.Link>
                            <Footer.Link href="/">ПО НИОКТР</Footer.Link>
                        </Footer.LinkGroup>
                        <Footer.LinkGroup col className='text-left mt-0 px-4'>
                        <h3 className='text-xl font-medium mb-0 text-black mt-0'>Поступление</h3>
                        <Footer.Link href="/">Магистратура</Footer.Link>
                        <Footer.Link href="/">Для студентов других вузов</Footer.Link>
                        <Footer.Link href="/">Стипендии</Footer.Link>
                        <Footer.Link href="/">Приемная кампания</Footer.Link>
                    </Footer.LinkGroup>
                        <Footer.LinkGroup col className='text-left mt-0 px-4'>
                        <h3 className='text-xl font-medium mb-0 text-black mt-0'>Наука</h3>
                        <Footer.Link href="/">О Студнауке</Footer.Link>
                        <Footer.Link href="/">Сотрудники</Footer.Link>
                        <Footer.Link href="/">Научные подразделения</Footer.Link>
                        <Footer.Link href="/">Контакты</Footer.Link>
                    </Footer.LinkGroup>
                        <Footer.LinkGroup col className='text-left mt-0 px-4'>
                        <h3 className='text-xl font-medium mb-0 text-black mt-0'>ИТМО</h3>
                        <Footer.Link href="/">Университет</Footer.Link>
                        <Footer.Link href="/">Лицензия</Footer.Link>
                        <Footer.Link href="/">Факультеты</Footer.Link>
                        <Footer.Link href="/">Как поступить</Footer.Link>
                    </Footer.LinkGroup>
                    </div>


                </div>
            </div>
        </Footer>
    );
}
