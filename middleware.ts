import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // TODO: Feel free to remove this block
  if (request.headers.get("host")?.includes("next-enterprise.vercel.app")) {
    return NextResponse.redirect("https://blazity.com/open-source/nextjs-enterprise-boilerplate", { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - all files in the public root (e.g. favicon, images, fonts, css, js)
     */
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
}
