/* USING useState */
import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

//1. Create an object with the fields and value it needs at default
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  //2. create variable with value and set using useState
  const [formFields, setFormFields] = useState(defaultFormFields);

  //3. Descontruction of values inside object
  const { displayName, email, password, confirmPassword } = formFields;

  //reset handler to reset all input forms
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //handler submit
  const handleSubmit = async (event) => {
    //prevents any sudden reload
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      /*
        Firebase imported method:
        method used to sign up user with email and password
        validations are created in firebase js
      */
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      /*
        Firebase imported method:
        method used to create a user document into the database
      */
      await createUserDocumentFromAuth(user, { displayName });

      //reset all the form inputs if create of user and document is successful
      resetFormFields();
    } catch (error) {
      /*
        error is obtain thanks to the firebase libraries:
          auth/email-already-in-use: user already has email assigned
      */
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  //4.Create handleEvent linked to the input tag and set the values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
