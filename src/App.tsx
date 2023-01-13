import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import Footer from './components/Footer';

const App: Component = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" component={Home} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
