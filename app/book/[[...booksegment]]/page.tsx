import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Book",
};

export default function BookSegment() {
  // example fetch book with id from params
  // book = fetchBookId(params.id)
  // check if book is exists
  // if book not exist redirect to not found page
  // notFound();
  return <div>Book Segment</div>;
}
