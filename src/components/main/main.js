import SearchEmployee from './search-employee/search-employee';
import EmployeeAddForm from './employees-add-form/employees-add-form';

const Main = () => {
    return (
        <main className="main">
            <SearchEmployee />
            <EmployeeAddForm />
        </main>
    );
};

export default Main;
