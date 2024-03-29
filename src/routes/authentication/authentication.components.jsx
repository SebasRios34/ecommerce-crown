import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

import "./authentication.styles.scss";

const Authentication = () => {
  //using useEffect is going to help us call data from the sign-in with redirect
  /* Using Sign in with Redirect
  useEffect(() => {
    async function fetchDataFromSignInRedirect() {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchDataFromSignInRedirect();
  }, []);
  */

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
