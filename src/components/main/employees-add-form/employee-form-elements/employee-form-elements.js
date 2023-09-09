const EmployeeFormElements = () => {
    return (
        <div className="empl-form-elems">
            <h2 className="empl-form-elems-title">Add a new employee</h2>
            <div className="empl-form-elems-inner">
                <input className="inpt inpt-empl-name" type="text" placeholder="What's his name?" />
                <input className="inpt inpt-empl-name" type="text" placeholder="Salary?" />
                <button className="btn-add-empl" type="submit">
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default EmployeeFormElements;
