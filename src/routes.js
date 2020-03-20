import React from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import Registration from './frontend/registration';
import Login from './frontend/login';
import Timeline from './frontend/timeline';
import upload from './frontend/postupload';
import Upload from './frontend/postupload';
import Timelinelft from './frontend/timelinergt';
import Timelinergt from './frontend/timelinelft'
import Profile from './frontend/profile';
import Category from './frontend/categoryUpload';

export default class Routes extends React.Component{
    render(){
        return(
            <div>
                
                <Switch>
                    <Route exact path = '/' component={Registration} />
                    <Route path = '/registration' component={Registration} />
                    <Route exact path = '/login' component={Login} />
                    
                    
                    {/* <Route path = '/login/post' component = {Timelinelft} /> */}
                </Switch>
                {localStorage.getItem('email') ? 
                <Route path = '/login/timeline' component={Timeline} /> :
                <Redirect to = '/login' /> }
                {/* <Route  path = '/login/timeline' component={Timeline} /> */}
                
            </div>
        )
    }
}