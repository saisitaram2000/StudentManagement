import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import studentAdd from './student/studentAdd';
import studentData from './student/studentData';
import studentsList from './student/studentsList';
import home from './student/home';
import NotFound from './student/404';

function App() {
  return (
    <Router>
      <div>
      <h1>STUDENT DATA MANAGEMENT SYSTEM</h1>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="add">AddStudent</Link>
          </li>
          <li>
            <Link to="student">List all Students</Link>
          </li>
        </ul>
        <hr />
        <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/add" component={studentAdd} />
        <Route exact path="/student" component={studentsList} />
        <Route exact path="/:studentid" component={studentData} />
        <Route path="*" component={NotFound} /> 
        </Switch>
      </div>
    </Router>




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
