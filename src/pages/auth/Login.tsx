import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks/hook";
import { verifyToken } from "../../utils/verifyToken";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("success login", { id: toastId });
      reset();
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.log(error)
      toast.error("something went wrong", { id: toastId });
    }
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
