import prisma from "@/libs/prisma";
import { Suspense } from "react";

// best practice use zod to validate response
// but this case use type any to avoid code for validate

export default async function TodoPage() {
  // NextJS component is server component as default --> no need to consider to use useState ...
  // 1. fetch data from external API
  // fetch return Promise (need await-async) and json, but good point is it does catching
  // const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await result.json();
  // or code in 1 line, use promise chaining
  // const data = await fetch("https://jsonplaceholder.typicode.com/users").then((result) => result.json());
  // console.log(data)
  // if use validation by zod
  // const { data, error, success } = userSchema.safeParse(data)
  // safeParse: if success = true ==> return data, if success = false ==> return error
  // if (!success) throw Error ('Invalid data response') ==> when throw Error, error would be detected by ErrorBoundery
  // but if success = true, type would be <data> not type any

  // 2. fetch data from DB
  // await new Promise((resolve) => setTimeout(() => resolve(""), 5000));
  // const data = await prisma.todo.findMany();
  // prisma dose refer type of variable as default (no need to use type any, as method //1)

  const p1 = new Promise((resolve) => setTimeout(() => resolve(""), 5000));
  const data = await prisma.todo.findMany();
  const p2 = new Promise((resolve) => setTimeout(() => resolve(3), 2000));

  const [a, totalTodo] = await Promise.all([p1, p2]);

  return (
    <>
      Todo List
      <Suspense fallback={<div className="">Fetching...</div>}>
        <TodoList />
      </Suspense >
      <Suspense fallback={<div className="">Calculating...</div>}>
        <Total />
      </Suspense>
      {/* {data.map((el) => {
        return <p key={el.id}>{el.title}</p>;
      })}
      {totalTodo} */}
      Footer
    </>
  );
}

async function Total() {
  const totalTodo = (await new Promise((resolve) =>
    setTimeout(() => resolve(3), 2000)
  )) as number;
  return <p>{totalTodo}</p>;
}

async function TodoList() {
  await new Promise((resolve) => setTimeout(() => resolve(""), 5000));
  const data = await prisma.todo.findMany();
  return (
    <>
      {data.map((el) => {
        return <p key={el.id}>{el.title}</p>;
      })}
    </>
  );
}
