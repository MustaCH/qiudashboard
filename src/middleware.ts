import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
});

export const config = {
  matcher: [
    // Protege todas las rutas excepto las públicas
    "/((?!auth|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
