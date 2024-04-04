import { PrismaClient } from "@prisma/client";

// import "./notifyTcavsCrone";

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

declare global {
  interface BigInt {
    toJSON(): string | number;
  }
}

// Необходимо для того, что БД корректно обрабатывала BitInt
// https://stackoverflow.com/questions/75947475/prisma-typeerror-do-not-know-how-to-serialize-a-bigint/76013128#76013128
BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int || this.toString();
};
