/* import components */
import EmployeeFormElements from './employee-form-elements/employee-form-elements';

/* import styles */
import './employees-add-form.css';

const EmployeeAddForm = () => {
    return (
        <section className="empl-add-form">
            <div className="container">
                <div className="empl-add-form-inner">
                    <h2 className="empl-form-title">Add a new employee</h2>
                    <EmployeeFormElements />
                </div>
            </div>
        </section>
    );
};

export default EmployeeAddForm;
