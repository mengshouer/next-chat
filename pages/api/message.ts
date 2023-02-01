// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from "next";
import type { NextApiResponseSocketIO } from "./socket/io";
import type { MessageProps } from "src/types/chat.types";
import prisma from "../../src/lib/prisma";

export default async function MessageHandler(
  request: NextApiRequest,
  response: NextApiResponseSocketIO
) {
  if (request.method === "GET") {
    // Get the last 100 pieces of message from the database
    const res = await prisma.message.findMany({
      take: 100,
      // orderBy: {
      //   id: "desc",
      // },
      include: {
        user: true,
      },
    });
    response.status(200).json({ data: res });
  } else if (request.method === "POST") {
    const { message }: { message: MessageProps } = request.body;
    // save to database
    const res = await prisma.message.create({
      data: {
        userId: message.userId,
        content: message.content,
      },
    });
    const user = {
      id: message.userId,
      name: message.userName,
      image: message.avatar,
    };
    response.socket.server.io.emit("message", { ...res, user });
    response.status(201).json({ data: message });
  } else {
    response.status(405).end();
  }
}
