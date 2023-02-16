import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ token }) => !!token,
  },
});

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: ["/api/:function*", "/chat/:chat*"],
};
