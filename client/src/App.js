import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/headerComponent';
import Footer from './components/Footer/footerComponent';

import Login from './screens/login/loginScreen';
import Registration from './screens/registration/registrationScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
