import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//CSS
import './App.css';

//Pages
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Dashboard from './components/layout/Dashboard';
import Footer from './components/layout/Footer';
import NeuNutzer from './components/neuForm/neuerNutzer';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <Navbar />

        <Route exact path="/" component={Dashboard} />

        <div className="container-fluid backend">
         <Route exact path="/neu-nutzer" component={NeuNutzer} />
          
        
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
  );
}}

export default App;
