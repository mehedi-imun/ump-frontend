import { Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Controller } from "react-hook-form";
type TPHSelectProps = {
  label: string;
  name: string;
  options:{
    value:string,
    label: string,
    disabled?:boolean
  }[]
};
const PhSelect = ({ label, name,options }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field,fieldState:{error} }) => (
        <FormItem label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            options={options}
            size="large"
          />
          {error && <small style={{color:"red"}}> {error.message}</small>}
        </FormItem>
        
      )}
    />
  );
};

export default PhSelect;
