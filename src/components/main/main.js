import SearchEmployee from './search-employee/search-employee';
import EmployeeAddForm from './employees-add-form/employees-add-form';
import EmployeesList from './employees-list/employees-list';

const Main = () => {
    return (
        <main className="main">
            <SearchEmployee />
            <EmployeeAddForm />
            <EmployeesList />
        </main>
    );
};

export default Main;
