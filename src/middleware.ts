export async function middleware(request: Request) {
  const userId = request.headers.get("X-Replit-User-Id");
  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }
}

export const config = {
  matcher: ["/api/:path*"],
};
