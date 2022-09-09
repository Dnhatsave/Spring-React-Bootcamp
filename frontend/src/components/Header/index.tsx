import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>Spring Boot && React Bootcamp</h1>
            <p>
              Credits
              <a href="https://www.instagram.com/devsuperior.ig">: dercioink@2022</a>
            </p>
        </div>
    </header>
      
    );
  }
  
  export default Header