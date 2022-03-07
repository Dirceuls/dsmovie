import {ReactComponent as GithubIcon} from 'assents/img/Vector.svg';
import './styles.css';

function Navbar(){

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                  <h1>DSMovie</h1>
                    <a href="https://github.com/Dirceuls">
                        <div className="dsmovie-contact-container">
                            <GithubIcon/>
                            <p className="dsmovie-contact-link">/dirceuls</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;