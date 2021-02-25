import React from 'react';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types'; // ES6

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications></Notifications>
      <div className='App'>
        <Header></Header>
        {/* operador ternario */}
        {isLoggedIn ? <CourseList></CourseList> : <Login></Login>}
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

// https://es.reactjs.org/docs/typechecking-with-proptypes.html
App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
