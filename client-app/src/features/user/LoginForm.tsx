import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { values } from "mobx";
import { Form, Button } from "semantic-ui-react";
import { TextInput } from "../../app/common/form/TextInput";

export const LoginForm = () => {
  return (
    <FinalForm
      onSubmit={values => console.log(values)}
      render={({ handleSubmit }) => (
        <Form>
          <Field name="username" component={TextInput} placeholder="UserName" />
          <Field
            name="password"
            component={TextInput}
            placeholder="UserName"
            type="password"
          />
          <Button positive content="Login" />
        </Form>
      )}
    />
  );
};
