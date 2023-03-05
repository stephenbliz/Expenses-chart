import Logo from '../assets/images/logo.svg';

const Header = () => {
    return ( 
        <header className="header">
            <nav className='nav'>
                <div>
                    <p>My balance</p>
                    <p className='balance'>$921.48</p>
                </div>
                <div>
                    <img src={Logo} alt="logo" style={{height: '4rem', width:'4rem' }} />
                </div>
            </nav>
        </header> 
    );
}
 
export default Header;