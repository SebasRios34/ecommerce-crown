//Using Styled Components
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

//BUTTON_TYPES_CLASSES variable is going to help us store the string for the type of button
export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

/*
  getButton help us define what styles the button is going to inhereit
  parameter: buttonType and is set to 'base' as a default
*/
const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    //here I'm calling the styled components created, so they can be rendered isnide the CustomButton constant created
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

/* 
children: represents that you want to place inside the button: h1, h2, h3, p...
buttonType: is going to help determine which type of button needs to be rendered
...otherProps: represents any other classes or types to be used on the Button
*/
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
