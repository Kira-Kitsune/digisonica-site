/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import App from './App';
import Home from './pages/Home';

import type { Component } from 'solid-js';

const WrappedApp: Component = () => {
    return (
        <Router root={App}>
            <Route path="/" component={Home} />
        </Router>
    );
};

render(() => <WrappedApp />, document.getElementById('root') as HTMLElement);
