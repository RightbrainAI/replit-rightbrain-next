import { User } from "@/types";

export async function GET(req: Request) {
  const userId = req.headers.get("X-Replit-User-Id");
  const userName = req.headers.get("X-Replit-User-Name");

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user: User = {
    userId,
    userName: userName || "",
  };

  return Response.json(user);
}
