import React from 'react';

const UserDetails = ({user, getPostsByUserId}) => {
    return (
        <div>
            <p>Name : {user.name}</p>
            <p>UserName : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Website : {user.website}</p>
            <button onClick={() => getPostsByUserId(user.id)}>Get Posts</button>
        </div>
    );
};

export {UserDetails};