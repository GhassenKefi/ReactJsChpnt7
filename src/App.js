import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Movies from './Components/Movies';
import Movie from './Components/Movie';
import { MoviesList } from './Data';


function App() {


  return (
    <Router>
          <Route exact path="/" component={Movies}/>
          <Route path={`/movie/:movieKey`}
  render={ (props) => <Movie data= {MoviesList} {...props} />}/>

    </Router>

  );
}
export default App;