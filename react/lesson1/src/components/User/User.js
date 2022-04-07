import React from 'react';

const User = ({user: {id, name, email}}) => {

    return (
        <div>
            {id} -- {name} -- {email}
        </div>
    );
};

export {User};