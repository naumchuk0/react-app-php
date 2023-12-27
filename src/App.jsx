import './App.css';
import GetCategory from './components/GetCategory';
import CreateCategory from './components/CreateCategory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

function App() {

  return (
    <div>
      <Menu></Menu>
      <div class="center">
        <Routes>
          <Route path="/" element={<GetCategory></GetCategory>}></Route>
          <Route path="/create" element={<CreateCategory></CreateCategory>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
