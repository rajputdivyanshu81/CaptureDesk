import { NextRequest, NextResponse } from "next/server";
import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

async function authMiddleware(request: NextRequest) {
  try {
    // Check if the auth cookie exists as a fast-path
    const hasCookie = request.cookies.has("better-auth.session_token") || request.cookies.has("__Secure-better-auth.session_token");
    
    if (!hasCookie) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    // Verify session via API to ensure it's valid
    const response = await fetch(new URL("/api/auth/get-session", request.url), {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    });

    if (!response.ok) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    const session = await response.json();
    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  } catch (error) {
    // On fetch failure, redirect to sign-in for safety
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

const validate = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
    })
  );

export default createMiddleware(validate, authMiddleware);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};

// ⨯ [TypeError: Body is unusable: Body has already been read]