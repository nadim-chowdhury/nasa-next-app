import userModel from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/db/config";

export default async function POST(req) {
  try {
    connectDB();
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    const isUserPresent = await userModel.findOne(email);
    if (!isUserPresent) {
      return NextResponse.json({ message: "Invalid email" }, { status: 402 });
    }

    const isMatch = await bcrypt.compare(password, isUserPresent.password);
    const name = isUserPresent.name;
    const token = jwt.sign({ name, email }, "amilieo");
    const response = NextResponse.json(
      {
        message: "User logged in successfully",
      },
      { status: 401 }
    );
    response.cookies.set("token", token);
    return response;
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
