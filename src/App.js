import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUsers from './CreateUsers';
import ReadUsers from './ReadUsers';
import UpdateUsers from './UpdateUsers';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateUsers/>}/>
        <Route path="/read/:id" element={<ReadUsers/>}/>
        <Route path="/edit/:id" element={<UpdateUsers/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
