import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token?.role);
    if (
        req.nextUrl.pathname === "/admin" &&
        req.nextauth.token?.role !== "ADMIN"
    ) {
        return new NextResponse("You are  not authorized")
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let {token} = params
        return !!token
      }
    },
  }
)
export const config = { matcher: ["/admin", "/user"] }

