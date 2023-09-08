// import components
import SearchField from './search-field/search-field';
import Filter from './filter/filter';

// import css files
import './search-section.css';

const SearchSection = () => {
    return (
        <section className="search-section">
            <div className="container">
                <div className="search-section-inner">
                    <h2 className="header-subtitle">Total number of employees: n</h2>
                    <div className="search-panel">
                        <SearchField />
                        <Filter />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;
