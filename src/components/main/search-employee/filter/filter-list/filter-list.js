/* import styles */
import './filter-list.css';

const FilterList = () => {
    return (
        <ul className="filter-drop-down-list">
            <li>
                <button className="btn btn-all-empl" type="button">
                    All employees
                </button>
            </li>
            <li>
                <button className="btn btn-for-promotion" type="button">
                    For promotion
                </button>
            </li>
            <li>
                <button className="btn btn-salary-is-more" type="button">
                    Salary is more than 1000$
                </button>
            </li>
        </ul>
    );
};

export default FilterList;
