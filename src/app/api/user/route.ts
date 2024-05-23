import { prisma } from "@/lib/prisma";
import { CreateUserDto } from "@/types/sharedDto";
import { NextResponse } from "next/server";

export const GET = async () => {
  const users = await prisma.user.findMany({});
  return NextResponse.json(users);
};

export const POST = async (request: Request) => {
  const userCredential: CreateUserDto = (await request.json()) as any;
  const existUser = await prisma.user.findUnique({
    where: { login: userCredential.login },
  });
  if (existUser) {
    return NextResponse.json(existUser.login);
  }
  const user = await prisma.user.create({
    data: { ...userCredential },
  });
  return NextResponse.json(user);
};
