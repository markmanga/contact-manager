import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {;
  return (
    <div>
      <h1 className="diesplay-6">404</h1>
      <p className="lead">The page you are looking for does not exist</p>
      <Link to="/"><i className="fas fa-home"></i> Go Home</Link>
    </div>
  )
}

export default Page404;
