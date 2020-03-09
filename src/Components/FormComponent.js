import React, { useState } from 'react';

const FormComponent = props => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: true
    })
    const onChangeHandler = event => {
        event.preventDefault();
        console.log(formState)
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(setFormState);
    }

    return (
        <div>
            {}
            <form onSubmit={onSubmitHandler}>
                <br />
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler} />
                <br />
                {formState.firstName.length > 0 && formState.firstName.length < 2 && (
                    <span className="redtext">Must be at least 2 Characters!</span>
                )}
                <br />
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler} />
                <br />
                {formState.lastName.length > 0 && formState.lastName.length < 2 && (
                    <span className="redtext">Must be at least 2 Characters!</span>
                )}
                <br />
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler} />
                <br />
                {formState.email.length > 0 && formState.email.length < 5 && (
                    <span className="redtext">Must be Valid Email!</span>
                )}
                <br />
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler} />
                <br />
                {formState.password.length > 0 && formState.password.length < 8 && (
                    <span className="redtext">Must be at least 8 Characters!</span>
                )}
                <br />
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                <br />
                {formState.confirmPassword === formState.password ? <span></span> :
                    <span className="redtext">Passwords must match!</span>
                }
                <input type="submit" />
            </form>

            <div>
                <p>First Name: <span>{formState.firstName}</span></p>
                <p>Last Name:<span>{formState.lastName}</span></p>
                <p>Email:<span>{formState.email}</span></p>
                <p>Password:<span>{formState.password}</span></p>
                <p>Password CW:<span>{formState.confirmPassword}</span></p>
            </div>
        </div>
    );
}
export default FormComponent;