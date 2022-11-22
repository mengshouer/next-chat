import type { NextApiRequest, NextApiResponse } from "next";
import type { Socket as NetSocket } from "net";
import type { Server as HttpServer } from "http";
import { Server as ServerIO } from "socket.io";

export type NextApiResponseSocketIO = NextApiResponse & {
  socket: NetSocket & {
    server: HttpServer & {
      io: ServerIO;
    };
  };
};

export default async function socketHandler(
  req: NextApiRequest,
  res: NextApiResponseSocketIO
) {
  if (!res.socket.server.io) {
    const io = new ServerIO(res.socket.server, {
      path: "/api/socket/io",
    });

    io.on("connection", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
