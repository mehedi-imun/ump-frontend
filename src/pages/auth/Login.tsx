/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
import PhForm from "../../components/form/PhForm";
import PhInput from "../../components/form/PhInput";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks/hook";
import { verifyToken } from "../../utils/verifyToken";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const  defaultValues =  {
      id: "A-0001",
      password: "admin123",
    }
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("success login", { id: toastId });
      // reset();
      navigate(`/${user.role}/dashboard`);
    } catch (error:any) {
      toast.error(error.data.message, { id: toastId });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PhForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PhInput type="text" name="id" label="ID:"></PhInput>

        <PhInput type="password" name="password" label="Password:"></PhInput>

        <Button htmlType="submit">login</Button>
      </PhForm>
    </Row>
  );
};

export default Login;
