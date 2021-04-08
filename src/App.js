// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';

// The Main App Component   
function App() {
  return (

    <Router>
      <Switch>

        <Route path = '/'  exact >
          <Homepage/>
        </Route>


        <Route path = '*'>
          <div> <h2> 404 </h2></div>
        </Route>


      </Switch>

    </Router>

  );
}

export default App;
