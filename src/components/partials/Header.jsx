import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
const Header =(props)=> {
    const { title } = props;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link" to="/"><i className="fas fa-home"></i> Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/contact/add"><i className="fas fa-plus"></i> Add</Link>
                            <Link className="nav-item nav-link" to="/about"><i className="fas fa-jedi"></i> About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Header.defaultProps = {
    title: 'My App'
}

export default Header;