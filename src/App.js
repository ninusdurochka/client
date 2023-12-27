import {Routes, Route, Navigate} from 'react-router-dom'

import {Header} from "./components/Header";

import {MainPage} from "./pages/MainPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {ProfilePage} from "./pages/ProfilePage";
import {EventsPage} from "./pages/EventsPage";
import {Layout} from "./components/Layout";
import {Footer, FooterComp} from "./components/FooterComp"
import {useAuth} from "./hooks/authHook";
import {AuthContext} from "./context/AuthContext";
import {ToastContainer} from 'react-toastify'

function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token;
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
                <Header/>
                <Layout>

                    <Routes>
                        <Route exact path='/' element={<MainPage/>}/>
                        <Route exact path='events' element={<EventsPage/>}/>
                        <Route exact path='register' element={<RegisterPage/>}/>
                        <Route exact path='login' element={<LoginPage/>}/>
                        <Route exact path='profile' element={<ProfilePage/>}/>
                        {/*<Route exact path='profile' element={isAuthenticated ? (*/}
                        {/*    <ProfilePage/>) : <Navigate replace to={"/"}/>}/>*/}
                    </Routes>
                    <ToastContainer position='bottom-right'/>

                </Layout>
                <FooterComp/>
            </div>
        </AuthContext.Provider>
    );
}

export default App
