import { Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Controller } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
const PhInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <FormItem label={label}>
            <Input   size="large" {...field} type={type} id={name} />
          </FormItem>
        )}
      />
    </div>
  );
};

export default PhInput;
