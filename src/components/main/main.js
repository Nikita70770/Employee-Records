import { Component } from 'react';

/* import Components */
import SearchEmployee from './search-employee/search-employee';
import EmployeeAddForm from './employees-add-form/employees-add-form';
import EmployeesList from './employees-list/employees-list';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <SearchEmployee />
                <EmployeeAddForm />
                <EmployeesList />
            </main>
        );
    }
}

export default Main;
