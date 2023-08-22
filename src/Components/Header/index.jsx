import './style.css';


const Header = () => {
    return (
        <>
            <div className='Navbar'>
                <div className='brand'>
                    <h1>Live</h1>
                </div>
                <div className='Navbar-container'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">ProductList</a>
                    <a href="">Contact</a>
                    <a href="">SinglePage</a>
                    <a href="">Cart</a>
                </div>
            </div>
        </>
    )
}
export default Header;