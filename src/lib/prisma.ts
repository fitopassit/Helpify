import { PrismaClient } from "@prisma/client";

declare namespace globalThis {
  let prisma: PrismaClient | undefined;
}

export let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!globalThis.prisma) {
      globalThis.prisma = new PrismaClient();
    }

    prisma = globalThis.prisma;
  }
}
