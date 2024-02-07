/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";
import PhForm from "../../../components/form/PhForm";
import PhSelect from "../../../components/form/PhSelect";
import { monthOptions } from "../../../constants/global";
import { useAddAcademicSemestersMutation } from "../../../redux/features/admin/academicManagement/academicSemesterApi";
import { academicSemesterSchema } from "../../../zodSchema/academicManagement.schema";

const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];
const currentYear = new Date().getFullYear();
const yearOption = [0, 1, 2, 3, 4, 5, 6].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemestersMutation();
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating..");
    const name = nameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    // console.log(semesterData);
    try {
      const res: any = await addAcademicSemester(semesterData);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("create successfully", { id: toastId });
      }
      console.log(res);
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message, { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm
          resolver={zodResolver(academicSemesterSchema)}
          onSubmit={onSubmit}
        >
          <PhSelect options={nameOptions} name="name" label="name"></PhSelect>
          <PhSelect options={yearOption} name="year" label="Year"></PhSelect>
          <PhSelect
            options={monthOptions}
            name="startMonth"
            label="Start Month"
          ></PhSelect>
          <PhSelect
            options={monthOptions}
            name="endMonth"
            label="End Month"
          ></PhSelect>
          <Button size="large" htmlType="submit">
            submit
          </Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
