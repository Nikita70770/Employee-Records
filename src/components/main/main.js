import SearchEmployee from './search-employee/search-employee';
import EmployeeAddForm from './employees-add-form/employees-add-form';
import EmployeesList from './employees-list/employees-list';

const Main = () => {
    const data = [
        { name: 'John C.', post: 'Programmer', salary: 2500, increase: false },
        { name: 'Kate W', post: 'Designer', salary: 1250, increase: true },
        { name: 'Bob D.', post: 'Director', salary: 8500, increase: false },
        { name: 'Tom C.', post: 'Manager', salary: 1190, increase: true },
        { name: 'Cindy S.', post: 'Secretary', salary: 1050, increase: true }
    ];

    return (
        <main className="main">
            <SearchEmployee />
            <EmployeeAddForm />
            <EmployeesList data={data} />
        </main>
    );
};

export default Main;
