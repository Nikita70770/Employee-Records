import { Component } from 'react';

/* import components */
import EmployeeItemTitle from './employees-list-item/employees-item-title';
import EmployeeItem from './employees-list-item/employee-item';

/* import styles */
import './employees-list.css';

class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.dataEmpl = this.props.data;
    }

    render() {
        const elements = this.dataEmpl.map((item, index) => <EmployeeItem key={index.toString()} employee={item} />);
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
