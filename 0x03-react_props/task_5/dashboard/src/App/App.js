import React from 'react';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types'; // ES6

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  return (
    <React.Fragment>
      <Notifications></Notifications>
      <div className='App'>
        <Header></Header>
        {/* operador ternario */}
        {isLoggedIn ? <CourseList listCourses={listCourses} ></CourseList> : <Login></Login>}
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
