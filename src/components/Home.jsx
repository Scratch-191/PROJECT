import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  return (
    <div className="App">
      <div className="content-wrapper"> {/* Wrapper div for padding */}
        <div className="fontstyle">#VANLIFE</div>
        <nav className="nav-links">
          <ul>Host</ul>
          <ul>About</ul>
          <ul>Vans</ul>
          <ul>
            <img src='./icons/user1.png' alt="#" height={25} width={35} />
          </ul>
        </nav>
        <h2 className='header'>Sign in to your account</h2>
        
        <div className="d-flex flex-column align-items-center justify-content-center vh-50">
          <div className="mt-5 col-md-4 ">
            <input
              
              className="form-control logins"
              placeholder="Email address" 
              type="email"
            
            />
          </div>
          <div className="mb-5 col-md-4">
            <input
              className="form-control logins" 
              placeholder="Password" 
              type="password" 
           
            />
          </div>
          <button className='signin col-md-4'>Sign in</button>
        </div>
        
        <p className='text'>Don't have an account? </p>
        <p className='text2'>Create one now</p>
      </div>

      <footer className="footer">
        <p>© 2022 #VANLIFE</p>
      </footer>
    </div>
  );
}

export default Home;
