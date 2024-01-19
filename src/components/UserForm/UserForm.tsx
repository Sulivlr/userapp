import React, {useState} from 'react';
import {User, UserForm} from "../../types";


interface Props {
    onSubmit: (user: User) => void;
}
const UserForm: React.FC<Props> = ({onSubmit}) => {

    const [user, setUser] = useState<UserForm>({
        name: '',
        description: '',
        age: 0,
        role: '',
        isActive: false,
    });

    const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
                ...user,
            age: parseInt(String(user.age)),
        });
    };

    return (
        <form onSubmit={formSubmit}>
            <h4>Add new user!</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={changeUser}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    value={user.description}
                    onChange={changeUser}
                />
            </div>

            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    className="form-control"
                    value={user.age}
                    onChange={changeUser}
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Add</button>
        </form>
    );
};

export default UserForm;