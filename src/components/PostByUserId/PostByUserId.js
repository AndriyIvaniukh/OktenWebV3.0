import React from 'react';

const PostByUserId = ({post}) => {
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export {PostByUserId};