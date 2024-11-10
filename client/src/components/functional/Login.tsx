import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type AppProps = {
  data: any;
  handleInputChange: (data: any) => void;
  handleLogin: () => {};
};

const Login = ({ data, handleInputChange, handleLogin }: AppProps) => {
  return (
    <>
      {" "}
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
      <Button className="rounded-full p-6" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default Login;
