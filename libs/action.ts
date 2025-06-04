"use server";

import { FormState } from "@/types";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import { z } from "zod";
import { ZodError } from "zod";

export async function submit(data: FormData) {
  console.log("submited");
  console.log("data=", data);
}

// // URLSearchOarams ===> key ===> value
// // method set, delete, get, has, etc.
// // FormData ===> key ===> value
// // method set, delete, get, has

// const formData = new FormData()
// formData.set('a', '20') // {a: '20'}
// formData.append('a', '8') // {a: ['20', '8']}
// formData.set('a', '6') // {'a', '6'}
// formData.get('a') // '6'

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  age: z.coerce.number().positive(),
});

export async function submitWithActionState(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    await new Promise((resolve) => setTimeout(() => resolve(""), 2000));
    const value = {
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      age: formData.get("age"),
    };
    const result = formSchema.parse(value);

    // return { success: true, message: 'Success submit' };
    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) { // check error is from redirect function
      throw error;                // if yesy, throw error to client, then client side do render automaticaly (no need to call any function)
    }
    if (error instanceof ZodError) {
      return {
        formData,
        success: false,
        message: "Validation Error",
        error: error.flatten().fieldErrors,
      };
    }
    return { success: false, formData, message: "Somthing went wrong" };
  }
}
