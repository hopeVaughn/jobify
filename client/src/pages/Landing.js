import React from 'react';
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';


const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>job <span>tracking</span> app</h1>
            <p>Jobify is a full stack application that helps you track and maintain your job search data. Add, edit, and delete jobs and track your monthly application data all in one spot.</p>
            <Link to='/register' className="btn btn-hero">Login/Register</Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
}
export default Landing