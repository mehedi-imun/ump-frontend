import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({ required_error: "name is required" }),
    year: z.string({ required_error: "Year is required" }),
    startMonth: z.string({ required_error: "start month is required" }),
    endMonth: z.string({ required_error: "End Month is required" }),
  });