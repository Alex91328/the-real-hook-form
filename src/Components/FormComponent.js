import React, { useState } from 'react';

const FormComponent = props => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        event.preventDefault();
        console.log(state)
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(state);
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler} />
                <br />
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler} />
                <br />
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler} />
                <br />
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler} />
                <br />
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                <br />
                <input type="submit" />
            </form>

            <div>
                <p>First Name: <span>{state.firstName}</span></p>
                <p>Last Name:<span>{state.lastName}</span></p>
                <p>Email:<span>{state.email}</span></p>
                <p>Password:<span>{state.password}</span></p>
                <p>Password CW:<span>{state.confirmPassword}</span></p>
            </div>
        </div>
    );
}
export default FormComponent;