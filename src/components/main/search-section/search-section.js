import SearchField from './search-panel/search-field';

const SearchSection = () => {
    return (
        <section className="search-section">
            <div className="container">
                <div className="search-section-inner">
                    <SearchField />
                </div>
            </div>
        </section>
    );
};

export default SearchSection;
