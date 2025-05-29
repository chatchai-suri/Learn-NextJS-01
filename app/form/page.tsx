'use client'

import { submit, submitWithActionState } from "@/libs/action";
import { useActionState } from "react";

export default function Form() {
  // (prevState, formData) => nextState
  const [state, formAction, isPending] = useActionState(submitWithActionState, {message: ''})
  console.log('state ====', state)
  if (isPending) {
    return <p>Loading.....</p>
  }

  return (
    <form action={formAction} className="grid gap-6 mt-8">
      <input name="email" type="text" placeholder="Email" className="border border-t-gray-300 px-3 py-1.5" />
      <input name="firstName" type="text" placeholder="FirstName" className="border border-t-gray-300 px-3 py-1.5" />
      <input name="age" type="text" placeholder="Age" className="border border-t-gray-300 px-3 py-1.5" />
      <button className="bg-blue-500 px-4 py-2 cursor-pointer">Submit</button>
    </form>
  )
}
