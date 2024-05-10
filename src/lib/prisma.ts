// import { PrismaClient } from "@prisma/client";
//
// declare namespace globalThis {
//   let prisma: PrismaClient | undefined;
// }
//
// export let prisma: PrismaClient;
//
// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
//   } else {
//     if (!globalThis.prisma) {
//       globalThis.prisma = new PrismaClient();
//     }
//
//     prisma = globalThis.prisma;
//   }
// }
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;