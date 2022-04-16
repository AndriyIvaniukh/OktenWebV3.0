import React from 'react';

const Post = ({post:{userId, title, body}}) => {
    return (
        <div>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
            <br/>
        </div>
    );
};

export {Post};