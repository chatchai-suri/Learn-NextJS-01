import { todos } from "@/data/mock";
import prisma from "@/libs/prisma";

// GET, POST, DELETE, PUT /api/products
export async function GET() {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({ data: todos });

  return Response.json({ message: "DB seeded successfully" });
}
