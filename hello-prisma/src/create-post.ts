import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Hello This is my 1st Post",
      content: "haha lol this is 2024 year!! and im learning prisma ORM",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main();
