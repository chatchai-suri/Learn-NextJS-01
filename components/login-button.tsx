"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/book");
  };
  
  return (
    <button className="bg-amber-50" onClick={handleClick}>
      Click Login
    </button>
  );
}
