import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./styles";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ianRMS</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">E-mail</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
