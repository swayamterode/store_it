import React from "react";

type FormType = "sign-in" | "sign-up";

interface AuthFormProps {
  type: FormType;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  return <div>{type === "sign-in" ? "Sign In" : "Sign Up"} Form</div>;
};

export default AuthForm;
