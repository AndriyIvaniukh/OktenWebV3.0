import React from 'react';

const Form2 = () => {

    let user = {};


    const submit = (e) => {
      e.preventDefault();
        user = {...user, [e.target.name]: e.target.value};

        // console.log(e.target.name)
        // console.log(e.target.name.value);
        console.log(user)
    }

    return (
        <form>
            <input type={"text"} name={'name'} onChange={submit}/>
            <input type={"number"} name={'age'} onChange={submit}/>
        </form>
    );
};

export default Form2;