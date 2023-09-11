/* import components */
import EmployeeItemTitle from './employees-list-item/employees-item-title';
import EmployeeItem from './employees-list-item/employee-item';

/* import styles */
import './employees-list.css';

const EmployeesList = () => {
    return (
        <section className="employees-list">
            <div className="container">
                <div className="employees-list-inner">
                    <table className="employees-table" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <EmployeeItemTitle />
                            <EmployeeItem />
                            <EmployeeItem />
                            <EmployeeItem />
                            <EmployeeItem />
                            <EmployeeItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default EmployeesList;
