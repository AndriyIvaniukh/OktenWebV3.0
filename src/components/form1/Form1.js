import React, {useRef} from 'react';

const Form1 = () => {
    const name = useRef();
    const age = useRef();


    const submit = (e) =>{
        e.preventDefault();
        console.log(name.current.value);
        console.log(age.current.value);
    }

    return (
        <form onSubmit={submit}>
            <input type={"text"} name={name} ref={name}/>
            <input type={"number"} name={age} ref={age}/>
            <button>Submit</button>
        </form>
    );
};

export default Form1;