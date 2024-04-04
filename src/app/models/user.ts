"use server";

import { prisma } from "@/lib/prisma";

export const addUser = async () => {
  await prisma.user.create({
    data: {
      active: true,
      email: `${String(Math.random())}@mail.ru`,
      name: String(Math.random()),
      password_hash: "test",
    },
  });
};

export const getUsers = async () => {
  return prisma.user.findMany({});
};
