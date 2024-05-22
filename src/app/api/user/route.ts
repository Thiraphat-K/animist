import { prisma } from "@/lib/prisma";
import { CreateUserDto } from "@/types/sharedDto";
// import { CreateUserDto } from "@/types/sharedDTO";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const users = await prisma.user.findMany({});
  return NextResponse.json(users);
};

const POST = async (request: NextApiRequest) => {
  const { body } = request;
  const createUser: CreateUserDto = body;
  const user = await prisma.user.create({ data: { ...createUser } });
  return NextResponse.json(user.login, { status: 201 });
};
