// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from "next";
import type { NextApiResponseSocketIO } from "./socket/io";
import type { MessageProps } from "src/types/chat.types";

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

export default async function MessageHandler(
  request: NextApiRequest,
  response: NextApiResponseSocketIO
) {
  if (request.method === "GET") {
    response.status(200).json({ data: localMessage });
  } else if (request.method === "POST") {
    const { message: newMessage } = request.body;
    localMessage.push(newMessage);
    response.socket.server.io.emit("message", newMessage);
    response.status(201).json({ data: newMessage });
  } else {
    response.status(405).end();
  }
}
