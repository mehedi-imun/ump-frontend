/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TFromConfig = {
  defaultValues?: Record<string,any>
}
type TFrom = {
  onSubmit: SubmitHandler<FieldValues>,
  children: ReactNode
}
& TFromConfig;

const PhForm = ({ onSubmit, children , defaultValues}:TFrom) => {
  const fromConfig: TFromConfig = {}
  if(defaultValues){
    fromConfig["defaultValues"] = defaultValues
  }
  const methods = useForm(fromConfig)
  return (
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
  </FormProvider>
  );
};

export default PhForm;
