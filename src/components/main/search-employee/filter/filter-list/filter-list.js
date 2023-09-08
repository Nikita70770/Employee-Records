/* import styles */
import './filter-list.css';

const FilterList = () => {
    return (
        <ul className="filter-drop-down-list">
            <li>
                <button type="button">All employees</button>
            </li>
            <li>
                <button type="button">For promotion</button>
            </li>
            <li>
                <button type="button">Salary is more than 1000$</button>
            </li>
        </ul>
    );
};

export default FilterList;
