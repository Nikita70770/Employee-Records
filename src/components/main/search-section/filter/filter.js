/* import components */
import FilterButton from './filter-button/filter-button';
import FilterList from './filter-list/filter-list';

/* import styles */
import './filter.css';

const Filter = () => {
    return (
        <div className="filter-inner">
            <FilterButton />
            <FilterList />
        </div>
    );
};

export default Filter;
