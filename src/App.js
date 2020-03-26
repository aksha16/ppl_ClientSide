import React from 'react';
import './App.css';

// App implementation in the form of class =======
// import Header from './frontend/header.js'
// import Footer from './frontend/footer';
// import Registration from './frontend/registration.js';
// import Welcome from './frontend/welcome';
// import Login from './frontend/login';
// import Routes from './routes';
// import Array from './frontend/compoarray';
// import{Route} from 'react-router-dom';

// function App() {
//   return (
//     <div>
//      <Route path = '/' component = {Header} /> 
//      <div className="container content">
//       <Routes />
//     </div>
//     <Footer /> 
//     {/* {/* <Array />  *} */}
//     </div>
//   );
// }


// App implementation in the form of Hooks .... 
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './componentsWithHooks/header'
import Footer from './componentsWithHooks/footer';
import Registration from './componentsWithHooks/registration';
import Welcome from './componentsWithHooks/welcome';
import Login from './componentsWithHooks/login';
import Timeline from './componentsWithHooks/timeline'


const App = () => {
  return (
    <div>
      <Header />
      <div className="container content">
      <Switch>
        <Route exact path = '/' component={Registration} />
        <Route path = '/registration' component={Registration} />

        <Route exact path = '/login' component={Login} />
       
      </Switch>
     
      {localStorage.getItem('email') ? 
        <Route path = "/login/timeline" component={Timeline} /> :
        <Redirect to = '/login' /> }
      </div>
      <Footer />
    </div>
  )
}







export default App;
