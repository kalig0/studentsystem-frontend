import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    
    <div>
      <Router>
        <div className = "containter">
          <HeaderComponent />
          <div className = "container">
            <Switch>
              <Route exact path = "/" component = {ListStudentComponent}></Route>
              <Route path = "/students" component = {ListStudentComponent}></Route>
              <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
              <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
              {/* <Route path = "/update-student/:id" component = {UpdateStudentComponent}></Route> */}
            </Switch>
          </div>  
          <FooterComponent />
        </div>
      </Router>
    </div>
    
    
  );
}

export default App;
