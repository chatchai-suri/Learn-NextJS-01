"use client";

import { submit, submitWithActionState } from "@/libs/action";
import { FormState } from "@/types";
import clsx, { ClassValue } from "clsx";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { twMerge } from "tailwind-merge";

// error: {email: 'email is required', firstName: 'first name is required', age: 'age must be a number}
const initial: FormState = {
  success: false,
  formData: new FormData(),
  message: "",
};

export default function Form() {
  // (prevState, formData) => nextState
  const [state, formAction, isPending] = useActionState(
    submitWithActionState,
    initial
  );
  const router = useRouter();

  // console.log("state ====", state);
  // if (isPending) {
  //   return <p>Loading.....</p>;
  // }

  if (state.success) {
    // router.push("/");
    return;
  }

  console.log(state)

  const email = state.formData.get("email");
  const firstname = state.formData.get("firstName");
  const age = state.formData.get("age");

  return (
    <form action={formAction} className="grid gap-6 mt-8">
      <div>
        <input
          name="email"
          type="text"
          placeholder="Email"
          // className="border border-t-gray-300 px-3 py-1.5"
          className={cn(
            "border border-gray-300 px-3 py-1.5",
            state.error?.email && "border-red-500"
          )}
          defaultValue={isString(email) ? email : ""}
        />
        {state.error?.email &&
          state.error?.email.map((el) => (
            <p className="text-red-500" key={el}>
              {el}
            </p>
          ))}
      </div>
      <input
        name="firstName"
        type="text"
        placeholder="FirstName"
        className="border border-t-gray-300 px-3 py-1.5"
        defaultValue={isString(firstname) ? firstname : ""}
      />
      <input
        name="age"
        type="text"
        placeholder="Age"
        className="border border-t-gray-300 px-3 py-1.5"
        defaultValue={isString(age) ? age : ""}
      />
      <button className="bg-blue-500 px-4 py-2 cursor-pointer">Submit</button>
    </form>
  );
}

function isString(data: unknown): data is string {
  return typeof data === "string";
}

// function App() {
//   return(
//   <RootLayout>
//     <ErrorBoundary fallback={<Error />}> // Error ===> error.tsx
//       <ErrorBoundary fallback={<FormError />}>
//         <Form />
//       </ErrorBoundary>
//     </ErrorBoundary>
//   </RootLayout>
//   )
// }

// lib clsx for concatination string
// clsx('bg-red-500', p-8, p-4) // 'bg-red-500 p-8 p-4'-->but p-8 and p-4 would conflig
// twMerge('bg-red-500 p-8 p-4) // 'bg-red-500 p-4' --> p-4 do overredden onto p-8
function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}

const a = 20;
clsx("bg-red-500", { "p-8": a > 20 }, "p-4"); // clsx('bg-red-500', p-4)
