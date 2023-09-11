/* import styles */
import './employee-form-elements.css';

const EmployeeFormElements = () => {
    return (
        <div className="empl-form-elements">
            <input className="inpt inpt-empl-name" type="text" placeholder="What's his name?" />
            <input className="inpt inpt-empl-status" type="text" placeholder="Status?" />
            <input className="inpt inpt-empl-salary" type="text" placeholder="Salary?" />
            <button className="btn-add-empl" type="submit">
                Add employee
            </button>
        </div>
    );
};

export default EmployeeFormElements;
