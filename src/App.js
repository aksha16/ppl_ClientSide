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
import Header from './hooksFrontEnd/header';
import Footer from './hooksFrontEnd/footer';
import Registration from './hooksFrontEnd/registration';
import Welcome from './hooksFrontEnd/welcome';


const App = () => {
  return (
    <div>
      <Header />
      <div className="container content">
      <Switch>
        <Route exact path = '/' component={Registration} />
        <Route path = '/registration' component={Registration} />
        {/* <Route exact path = '/login' component={Login} /> */}
      </Switch>
      <Route path ='/' component={Welcome} />
      {/* {localStorage.getItem('email') ? 
        <Route path = '/login/timeline' component={Timeline} /> :
        <Redirect to = '/login' /> } */}
      </div>
      <Footer />
    </div>
  )
}







export default App;
