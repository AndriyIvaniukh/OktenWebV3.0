import React from 'react';

const Comment = ({comment:{name, email, body}}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
            <br/>
        </div>
    );
};

export {Comment};