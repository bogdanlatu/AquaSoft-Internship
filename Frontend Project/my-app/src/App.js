import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Components
import NavBar from './Components/NavBar/NavBar';
import PageContainer from './Components/PageContainer/PageContainer';

function App() {
  
  const counter = useSelector( (state) => state.counter);
  const dispatch = useDispatch();  

  return (
    <Router>
      <div className="App container-fluid">
        <NavBar/>
        <PageContainer/>
      </div>
    </Router>
  );
}

export default App;
