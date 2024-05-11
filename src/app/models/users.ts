"use server";

import { Server, User } from "@prisma/client";
import z from "zod";

import { prisma } from "@/lib/prisma";

export const addServerLawChapter = async () => {
  await prisma.laws.create({
    data: {
      name: "Административный закон",
      chapters: {
        create: {
          chapterName: "Тестовая глава",
          chapterNumber: "1",
          chapterItems: {
            create: {
              article: "1.1",
              titleArticle: "Статья ",
              note: "123",
              explanation: "132",
              updatedBy: "123",
            },
          },
          rulesId: "123",
          updatedBy: "123",
        },
      },
      updatedBy: "123",
      serverId: "123",
    },
  });
};

export const getUsers = async () => {
  return prisma.user.findMany({});
};

// servers: Server["name"]
export const getServers = async () => {
  return await prisma.server.findMany({});
};

export const getUserByRole = async (role: User["role"]) => {
  return await prisma.user.findMany({
    where: {
      role,
    },
  });
};

const zUpdateUser = z.object({
  name: z.string(),
  id: z.string(),
  role: z.enum(["Dispatcher", "Agent", "Admin", "Driver"]),
});

export const updateUser = async (formData: FormData) => {
  const res = zUpdateUser.parse(Object.fromEntries(formData));

  const { id, role, name } = res;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    })!;

    if (!existingUser) {
      throw new Error(`User with id ${id} not exist`);
    }

    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        role: role,
      },
    });
  } catch (e) {
    console.log("updateUser", e);
    return e;
  }
};
