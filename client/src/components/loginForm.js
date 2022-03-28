import React, {Component} from "react";
import Input from "./input.js";
const Joi = require("joi");

class LoginForm extends Component
{
    constructor(props){
        super(props);

        this.state = {
            data: {
                email: "",
                password: ""
            },
            errors: {
                email: [],
                password: []
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    schema = {
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required()
            .label("Email"),
        password: Joi
            .string()
            .min(7)
            .max(25)
            .required()
            .label("Password")
    }

    handleChange(e)
    {
        var data = {...this.state.data};
        var name = e.target.name;
        var newValue = e.target.value;
        data[name] = newValue;


        var newErrors = this.validateProperty(name, newValue);
        var errors = {...this.state.errors};
        errors[name] = newErrors;
        console.log(errors);
        this.setState({data: data, errors: errors});
    }

    handleSubmit(e)
    {
        e.preventDefault();
    }

    validateProperty(name, input) {
        var testObject = { [name]: input };
        const options = { abortEarly: true };
        var result = Joi.object({ [name]: this.schema[name] }).validate(testObject, options);

        var errors = [];
        if (!result.error) return null;

        for (var item of result.error.details) {
            errors.push(item.message);
        }

        return errors;
    }

    validate() 
    {
        var data = this.state.data;
        const options = { abortEarly: false };
        var result = Joi.object(this.schema).validate(data, options);

        var errors = [];
        if (!result.error) return null;

        for (var item of result.error.details) {
            errors.push(item.message);
        }

        return errors;
    }

    render(){
        return (
            <div className="row my-5">
                <div className="col-4 mx-auto">
                    <form autoComplete="off">
                        <Input 
                            type="email"
                            name="email"
                            value={this.state.data.email} 
                            onChange={this.handleChange} 
                            label="Email"
                            errors={this.state.errors.email}
                        />
                        <Input 
                            type="password"
                            name="password"
                            value={this.state.data.password} 
                            onChange={this.handleChange} 
                            label="Password"
                            errors={this.state.errors.password}
                        />
                        <button type="submit" onClick={this.handleSubmit} disabled={this.validate()} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
