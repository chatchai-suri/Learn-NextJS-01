"use client";

type ErrorProps = {
  error: Error & { digest?: string};
  reset: () => void;
};

// hashFn ===> hash plain text into hashValue(digest)
// don't let client side know what error occured for safety issue

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>500</h1>
      <p>Something went wrong</p>
      <button onClick={reset} className="bg-gray-300 cursor-pointer">Try again</button>
    </div>
  );
}
