import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <h1 className="header-title">Employee Records</h1>
                    <h2 className="header-subtitle">Total number of employees: n</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
