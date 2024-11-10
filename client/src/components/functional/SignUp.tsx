import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type AppProps = {
  data: any;
  handleInputChange: (data: any) => void;
  handleSignup: () => {};
};

const SignUp = ({ data, handleInputChange, handleSignup }: AppProps) => {
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        className="rounded-full p-6"
        value={data?.email}
        name="email"
        onChange={handleInputChange}
      />

      <Input
        placeholder="Password"
        type="password"
        className="rounded-full p-6"
        value={data?.password}
        name="password"
        onChange={handleInputChange}
      />

      <Input
        placeholder="Confirm Password"
        type="password"
        className="rounded-full p-6"
        value={data?.confirmPassword}
        name="confirmPassword"
        onChange={handleInputChange}
      />

      <Button className="rounded-full p-6" onClick={handleSignup}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;
