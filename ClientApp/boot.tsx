import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as promiseMiddleware from 'redux-promise';

import ClassList from './components/class-list';
import DisplayCourse from './components/display-course';
import Header from './components/header';

import reducers from './reducers/root-reducer';

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

    ReactDOM.render(
        <AppContainer>
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div className="container-fluid">
                    <Header />
                    <BrowserRouter>
                        <Switch>
                            <Route path="/courses/:id" component={DisplayCourse} />
                            <Route path="/courses" component={ClassList} />
                            <Redirect to="/courses" />
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./components/class-list', () => {
        renderApp();
    });
}
