import type { MessageProps } from "src/types/chat.types";

export async function fetchMessage(): Promise<{ data: MessageProps[] }> {
  const response = await fetch("/api/message", {
    method: "get",
  });
  const result = await response.json();

  return result;
}

export async function postMessage(
  message: MessageProps
): Promise<{ data: MessageProps }> {
  const response = await fetch("/api/message", {
    method: "post",
    body: JSON.stringify({
      message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  return result;
}
