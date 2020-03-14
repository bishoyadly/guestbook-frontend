import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from "./components/Signup/Signup";
import BookForm from "./components/bookForm/BookForm";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import {AuthObj} from "./Auth/auth";

const baseURL = process.env.REACT_APP_BaseURL;

function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={`/${baseURL}/login`}>
                        <Login AuthObj={AuthObj}/>
                    </Route>
                    <Route exact path={`/${baseURL}/`}>
                        <Login AuthObj={AuthObj}/>
                    </Route>
                    <Route path={`/${baseURL}/signup`}>
                        <SignUp/>
                    </Route>
                    <PrivateRoute
                        AuthObj={AuthObj}
                        path={`/${baseURL}/guestBook`}
                    >
                        <BookForm AuthObj={AuthObj}/>
                    </PrivateRoute>
                    <Route>
                        <h1 style={{
                            background: 'white',
                            fontSize: '100px',
                            borderRadius: '50px',
                            padding: '100px'
                        }}>Not Found</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;