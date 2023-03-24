// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../src/lib/prisma";

export default async function MessageHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).end();
    return;
  }
  try {
    if (req.method === "GET") {
      // Get the last 100 pieces of message from the database
      const user = await prisma.user.findUnique({
        where: {
          email: session.user?.email as string,
        },
      });
      res.status(200).json(user);
    } else {
      res.status(405).end();
    }
  } catch (error: Error | unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    res.status(500).end();
  }
}
