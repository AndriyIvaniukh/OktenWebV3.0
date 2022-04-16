import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../User/User";

const Users = ({getUserDetails}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUserDetails={getUserDetails}/>)}
        </div>
    );
};

export {Users};