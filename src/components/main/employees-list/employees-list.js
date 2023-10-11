import { Component } from 'react';

/* import components */
import EmployeeItemTitle from './employees-list-item/employees-item-title';
import EmployeeItem from './employees-list-item/employee-item';

/* import styles */
import './employees-list.css';

class EmployeesList extends Component {
    constructor() {
        super();
        this.data = [
            { id: this.getIdEmpl(), name: 'John C.', post: 'Programmer', salary: 2500, increase: false },
            { id: this.getIdEmpl(), name: 'Kate W', post: 'Designer', salary: 1250, increase: false },
            { id: this.getIdEmpl(), name: 'Bob D.', post: 'Director', salary: 8500, increase: false },
            { id: this.getIdEmpl(), name: 'Tom C.', post: 'Manager', salary: 1190, increase: false },
            { id: this.getIdEmpl(), name: 'Cindy S.', post: 'Secretary', salary: 1050, increase: false }
        ];
    }

    getIdEmpl = () => {
        const min = 0;
        const max = 10000;
        return Math.floor(Math.random() * (max - min) + min);
    };

    render() {
        const elements = this.data.map(item => <EmployeeItem key={item.id.toString()} employee={item} />);
        return (
            <section className="employees-list">
                <div className="container">
                    <div className="employees-list-inner">
                        <table className="employees-table" cellSpacing="0" cellPadding="0">
                            <tbody>
                                <EmployeeItemTitle />
                                {elements}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default EmployeesList;
