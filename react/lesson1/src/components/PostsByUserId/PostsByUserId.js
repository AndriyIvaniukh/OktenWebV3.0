import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {PostByUserId} from "../PostByUserId/PostByUserId";

const PostsByUserId = ({userId}) => {

    const [postsByUserId,setPostsByUserId] = useState([]);

    useEffect(()=>{
        postsService.getByUserId(userId).then(value => setPostsByUserId(value.data));
    },[postsByUserId])

    return (
        <div>
            {postsByUserId.map(post => <PostByUserId key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsByUserId};