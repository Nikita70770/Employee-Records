/* import components */
import EmployeeItemTitle from './employees-list-item/employees-item-title';
import EmployeeItem from './employees-list-item/employee-item';

const EmployeesList = () => {
    return (
        <section className="employees-list">
            <div className="container">
                <div className="employees-list-inner">
                    <table className="employees-table">
                        <EmployeeItemTitle />
                        <EmployeeItem />
                    </table>
                </div>
            </div>
        </section>
    );
};

export default EmployeesList;
