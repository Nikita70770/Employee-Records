/* import components */
import SearchField from './search-field/search-field';
import Filter from './filter/filter';

/* import styles */
import './search-employee.css';

const SearchEmployee = () => {
    return (
        <section className="search-employee">
            <div className="container">
                <div className="search-employee-inner">
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

export default SearchEmployee;
