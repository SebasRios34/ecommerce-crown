import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  /*
    using useState instead of useContext
    set to defaultFormFields: object with email and password passed as empty strings
  */
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  /*
    Used with useContext:
    using useContext is going to allow us to set user data to then be used in other components
    const { setCurrentUser } = useContext(UserContext);
  */
  //handler for setFormFields to reset the values for email and password
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  /*
    handler to call the Sign In with Google
    used as an async method due to the fact that the sign in pop needs to load/to wait
  */
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  //handler when the form is submitted
  const handleSubmit = async (event) => {
    //prevent any reload of the page
    event.preventDefault();

    try {
      /*
        Firebase imported method:
        method used to sign in user with email and password
        validations are created in firebase js
      */
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      /*
        Used with useContext:
        after user clicks submit the user data is set using setCurrentUser
        setCurrentUser(user);
      */

      //inputs are reseted if the form is submitted successfully
      resetFormFields();
    } catch (error) {
      /*
        error is obtain thanks to the firebase libraries:
          auth/wrong-password: typed incorrect password
          auth/user-not-found: user is not associated with the email
      */
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email: " + email);
          break;
        case "auth/user-not-found":
          alert("no user associated with this email: " + email);
          break;
        default:
          console.log(error.code);
      }
      console.log(error);
    }
  };

  /*
    handler for changes in the form inputs:
    as soon as a new input is detected the function executes
  */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
