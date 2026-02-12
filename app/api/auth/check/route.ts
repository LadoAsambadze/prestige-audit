import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token");

    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify token
    await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );

    return NextResponse.json({ authenticated: true });
  } catch (error) {
    return NextResponse.json({ authenticated: false });
  }
}
