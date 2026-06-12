import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.create({
    data: {
      email: "test@gmail.com",
      name: "Sean",
    },
  });

  return Response.json(user);
}