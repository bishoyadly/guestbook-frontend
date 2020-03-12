import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from "./components/Login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route exact path='/'>
                        <Login/>
                    </Route>
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
