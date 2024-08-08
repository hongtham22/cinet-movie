
import logoDefault from '../../assets/img/logo-default-220x68.png'
import './Header.css'
import { Link } from 'react-router-dom'; 



function Header() {
  return (
    <div className="header">
         <Link to={`/`} >
             <img src={logoDefault} alt="logoDefault" className='logo' />
         </Link>
        <div className="right-header">
            <h3 className="active">Home</h3>
            <h3>Movies</h3>
            <h3>TV shows</h3>
            <h3>People</h3>
            <div className='search'>
                <input type="text" placeholder="Search..." className="ip-search" />
                <button className="btn-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" className="search-icon">
                        <rect x="-225" y="-225" width="2700" height="2700" fill="rgb(100%, 100%, 100%)" fillOpacity="1"/>
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.442 1.398a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                    </svg>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Header