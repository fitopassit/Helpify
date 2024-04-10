"use server";

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
