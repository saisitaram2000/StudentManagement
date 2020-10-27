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
  console.log(process.env.REACT_APP_GITHUB_REPONAME);
  console.log(window.location.pathname);
  console.log(`${process.env.REACT_APP_GITHUB_REPONAME}/student`)
  return (
    <Router>
      <div>
      <h1>STUDENT DATA MANAGEMENT SYSTEM</h1>
        <ul>
          <li>
            <Link to={`${process.env.REACT_APP_GITHUB_REPONAME}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.REACT_APP_GITHUB_REPONAME}/add`}>AddStudent</Link>
          </li>
          <li>
            <Link to={`${process.env.REACT_APP_GITHUB_REPONAME}/student`}>List all Students</Link>
          </li>
        </ul>
        <hr />
        <Switch>
        <Route exact path={`${process.env.REACT_APP_GITHUB_REPONAME}/`} component={home}/>
        <Route exact path="/add" component={studentAdd} />
        <Route exact path={`${process.env.REACT_APP_GITHUB_REPONAME}/student`} component={studentsList} />
        <Route exact path={`${process.env.REACT_APP_GITHUB_REPONAME}/:studentid`} component={studentData} />
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
