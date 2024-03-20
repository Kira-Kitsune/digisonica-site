import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { Component } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';

const App: Component<RouteSectionProps<unknown>> = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
};

export default App;
