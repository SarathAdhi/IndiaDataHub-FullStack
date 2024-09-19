import { NextRequest, NextResponse } from "next/server";
import { fetchUser } from "./lib/fetch-user";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  let user: User | undefined = undefined;

  try {
    user = await fetchUser();
  } catch (error) {}

  const pathname = request.nextUrl.pathname;

  if (!user) {
    res.cookies.delete("bearer-token");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).)",
    "/((?!.+\\.[\\w]+$|_next).)",
    "/",
    "/dashboard",
  ],
};
