import React from 'react';

const User = ({user, getUserDetails}) => {

    return (
        <div>
            {user.id}. {user.name}
            <button onClick={()=>getUserDetails(user)}>Details</button>
        </div>
    );
};

export {User};