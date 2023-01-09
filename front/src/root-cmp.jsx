
import './assets/style/main.css'

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

import { AppHeader } from './cmps/app-header';

import { HomePage } from './pages/home-page.jsx';
import { ToyIndex } from './pages/toy-index.jsx';
import { ToyDetails } from './pages/toy.details';



// import { AppFooter } from './cmps/app-footer';

import { store } from './store/store.js';
import { AboutUs } from './pages/about-us';


export default function App() {

    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout app">
                    <AppHeader />
                    <main>
                        <Routes>
                            <Route element={<HomePage />} path="/" />
                            <Route element={<AboutUs/>}path="/about" />
                            <Route element={<ToyIndex />} path="/toy" />
                            <Route element={<ToyDetails />} path="/toy/:toyId" />

                        </Routes>
                    </main>
                    {/* <AppFooter /> */}
                </section>
            </Router>
         </Provider>
    )
}