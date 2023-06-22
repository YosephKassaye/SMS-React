import React from "react";
import PropTypes from "prop-types";
import Logo from "./Pages/logo";
import Menu from "./Pages/menu";
import Homepage from "./Pages/homepage";
import Footer from "./Pages/footer";
import { BrowserRouter, Routes, Route, Link , NavLink} from 'react-router-dom';
import Student from './Pages/studentsstats'
class smsmain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>Welcome to Yayobe SMS</h2>
        <Logo></Logo>
        
        <BrowserRouter>
          <header>
            <nav>
              <h1>Yayobe</h1>
              <Link to="student">Students </Link>
              <Link to="Student">Departments </Link>
              <Link to="Product">Grade </Link>
              <Link to="Product">Login </Link>
              <Link to="Product">Log out </Link>
            </nav>
          </header>

          <main>
            <Routes>
              
              <Route path="/student" element={<Student />} />
              
            </Routes>
          </main>
        </BrowserRouter>

        <Homepage></Homepage>
        <Footer></Footer>
      </div>
    );
  }
}

smsmain.propTypes = {};

export default smsmain;
