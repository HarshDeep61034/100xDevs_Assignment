import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "sudhanshu@gmail.com",
      name: "Sudhanshu Sodiyal",
    },
  });
}

main();
