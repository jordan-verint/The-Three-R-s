import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { createPost } from '../redux/actions';

// Redux form
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component{
    renderField(field){
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return(
            <div className={className}>
                <label>{field.label}</label>
                <br />
                <input
                    type="text"
                    {...field.input}
                />
                <br />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="container">
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field
                        label="Title"
                        name="title" 
                        component={this.renderField} 
                    />
                    <br/>
                    <Field
                        label="Categories"
                        name="categories" 
                        component={this.renderField} 
                    />
                    <br/>
                    <Field
                        label="Content"
                        name="content" 
                        component={this.renderField} 
                    />
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/">Cancel</Link>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a Title!';
    }

    if (!values.content) {
        errors.categories = "Please supply a Category";
    }

    if(!values.content) {
        errors.content = 'Please supply some content!';
    }

    // if errors empty form is good to submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm',
})(
    connect(null, {createPost})(PostsNew)
);