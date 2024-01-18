import React from 'react';

const UserForm: React.FC = () => {
    return (
        <form>
            <h4>Add new users!</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Add</button>
        </form>
    );
};

export default UserForm;