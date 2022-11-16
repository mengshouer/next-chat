// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from "next";
import { MessageProps } from "src/types/chat.types";

const localMessage: MessageProps[] = [
  {
    user_id: "1",
    username: "John",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolor sint nulla accusantium quia, quidem enim, tempore voluptatibus veniam molestiae nisi quo praesentium in, consequuntur odit ipsa possimus ratione dolorum.",
    timestamp: 1668432217073,
  },
  {
    user_id: "1",
    username: "John",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quis, quos consequuntur reiciendis similique aspernatur esse ab quisquam non, enim itaque asperiores alias ex illum sequi explicabo cupiditate. Amet, numquam.",
    timestamp: 1668432217074,
  },
  {
    user_id: "1",
    username: "John",
    message: "How are you?",
    timestamp: 1668432217075,
  },
  {
    user_id: "2",
    username: "Jane",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempora ratione in, aut expedita aspernatur iure autem illum corrupti beatae, molestias est eaque doloremque, magnam inventore quisquam dignissimos quaerat a.",
    timestamp: 1668432217076,
  },
  {
    user_id: "2",
    username: "Jane",
    message: "How are you?",
    timestamp: 1668432217077,
  },
];

const MessageHandler: NextApiHandler = async (request, response) => {
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (request.method === "GET") {
    response.status(200).json({ data: localMessage });
  } else if (request.method === "POST") {
    const { message: newMessage } = request.body;
    localMessage.push(newMessage);
    response.status(201).json({ data: newMessage });
  } else {
    response.status(405).end();
  }
};

export default MessageHandler;
