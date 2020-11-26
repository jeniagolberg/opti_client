import logo from './logo.svg';
import {useEffect, useState} from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import MainScreen from './components/main-screen/main_page';
import NavBar from './components/nav-bar/nav-bar';
import TablePage from './components/statistics/table_page';

function App() {

  const [movies, setMoives] = useState([]);
 
  useEffect(() => {
    async function fetchData(){
    let res = await axios(
      'http://localhost:3001/getMovieData',
    );
      setMoives(Object.values(res.data));
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <Router>
        <div className ="nav-container">
          <NavBar/>
        </div>
        <div className = "route-switch-container">
        <Switch>
          <Route path = "/about">
            <div>
              TBD about
            </div>
          </Route>
          <Route path = "/stats">
          <div className = "page-container">
              <TablePage movies = {movies}></TablePage>
            </div>
          </Route>
          <Route path = "/">
            <div className = "page-container">
              <MainScreen movies = {movies}/>
            </div>
          </Route>
        </Switch>
        </div>
        </Router>
    </div>
  );
}

export default App;
