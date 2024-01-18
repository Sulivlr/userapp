import React from 'react';

const UserCard: React.FC = () => {
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">User name</h5>
                        <p className="card-text small">Description</p>
                        <p className="card-text">Age</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserCard;