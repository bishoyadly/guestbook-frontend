import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from "./components/Login/Login";
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import SignUp from "./components/Signup/Signup";
import BookForm from "./components/bookForm/BookForm";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

const AuthObj = {
    isAuthenticated: true,
    authenticate(cb) {
        AuthObj.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        AuthObj.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login AuthObj={AuthObj}/>
                    </Route>
                    <Route exact path='/'>
                        <Login AuthObj={AuthObj}/>
                    </Route>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                    <PrivateRoute
                        AuthObj={AuthObj}
                        path='/guestBook'
                    >
                        <BookForm/>
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
