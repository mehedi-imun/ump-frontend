import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks/hook";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation();

  const { register, reset, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await login(data).unwrap();
    const user = verifyToken(res.data.accessToken)
    dispatch(setUser({ user, token: res.data.accessToken }));
    reset()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="id">password:</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">login</Button>
    </form>
  );
};

export default Login;
