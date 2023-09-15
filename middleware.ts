import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // const supabase = createMiddlewareClient({ req, res });
  // const isAuthPath = req.nextUrl.pathname === "/examples/auth";

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (isAuthPath && user) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  // if (!isAuthPath && !user) {
  //   return NextResponse.redirect(new URL("/examples/auth", req.url));
  // }

  return res;
}
export const config = {
  matcher: ["/", "/examples/:path*"],
};
