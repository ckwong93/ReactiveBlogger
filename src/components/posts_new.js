import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderField(field){
    const { meta: { touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          label='Title'
          type="text"
          className="form-control"
          {...field.input}
        />
        <div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    )
  }

  onSubmit(values){
    console.log(values);
  }
  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }
}

function validate(values){
  const errors = {};
  if (!values.title ){
    errors.title = "Enter a title";
  }
  if (!values.categories){
    errors.categories = "Enter a category";
  }
  if (!values.content){
    errors.content = "Enter a content";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
