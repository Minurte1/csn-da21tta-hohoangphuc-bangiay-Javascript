import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './views/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import MyNavbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThongTinChiTietGiay from './views/thongtinchitietgiay';
import Footer from './components/foolterHomepage';
import MyNavbar from './components/NavbarhomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HomePage></HomePage>
            </>
          }
        />
        <Route path="/thongtinchitietgiay/:shoes" element={<><MyNavbar /><ThongTinChiTietGiay />    <Footer /></>} />

      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
