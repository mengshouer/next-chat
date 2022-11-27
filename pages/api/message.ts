// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import type { MessageProps } from "src/types/chat.types";
import Pusher from "pusher";

const localMessage: MessageProps[] = [
  {
    email: "1",
    name: "John",
    image: "",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolor sint nulla accusantium quia, quidem enim, tempore voluptatibus veniam molestiae nisi quo praesentium in, consequuntur odit ipsa possimus ratione dolorum.",
    timestamp: 1668432217073,
  },
  {
    email: "1",
    name: "John",
    image: "",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quis, quos consequuntur reiciendis similique aspernatur esse ab quisquam non, enim itaque asperiores alias ex illum sequi explicabo cupiditate. Amet, numquam.",
    timestamp: 1668432217074,
  },
  {
    email: "1",
    name: "John",
    image: "",
    message: "How are you?",
    timestamp: 1668432217075,
  },
  {
    email: "2",
    name: "Jane",
    image: "",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempora ratione in, aut expedita aspernatur iure autem illum corrupti beatae, molestias est eaque doloremque, magnam inventore quisquam dignissimos quaerat a.",
    timestamp: 1668432217076,
  },
  {
    email: "2",
    name: "Jane",
    image: "",
    message: "How are you?",
    timestamp: 1668432217077,
  },
];

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

export default async function MessageHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  if (req.method === "GET") {
    res.status(200).json({
      data: localMessage,
      pusher: {
        pusher_app_key: process.env.PUSHER_APP_KEY,
        pusher_app_cluster: process.env.PUSHER_APP_CLUSTER,
      },
    });
  } else if (req.method === "POST") {
    const { message: newMessage } = req.body;
    localMessage.push(newMessage);
    pusher.trigger("chat", "message", newMessage);
    res.status(201).json({ data: newMessage });
  } else {
    res.status(405).end();
  }
}
