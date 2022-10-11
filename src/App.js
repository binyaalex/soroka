import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/Main'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='pageDad'>
          <div className='page'>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
