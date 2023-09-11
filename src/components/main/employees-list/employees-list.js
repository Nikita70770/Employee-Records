/* import components */
import EmployeeItemTitle from './employees-list-item/employees-item-title';
import EmployeeItem from './employees-list-item/employee-item';

/* import styles */
import './employees-list.css';

const EmployeesList = ({ data }) => {
    const elements = data.map(itemData => {
        return <EmployeeItem emplooyee={itemData} />;
    });

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
};

export default EmployeesList;
