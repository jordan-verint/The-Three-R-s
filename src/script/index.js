import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Redux 
import { Provider } from "react-redux";
import promise from "redux-promise";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import App
import PostsIndex from './components/posts_index';
import PostsNew from "./components/posts_new";
import PostsShow from './components/posts_show';

// Get Redux Store
import store from './redux';

class FormApp extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/posts/new" component={PostsNew} />
                            <Route path="/posts/:id" component={PostsShow} />
                            <Route path="/" component={PostsIndex} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<FormApp />, document.getElementById("app"));