import userModel from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/db/config";

export default async function POST(req) {
  try {
    connectDB();
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Invalid fields" }, { status: 400 });
    }

    const isUserPresent = await userModel.findOne(email);
    if (isUserPresent) {
      return NextResponse.json(
        { message: "User is already present" },
        { status: 402 }
      );
    }

    const hashPassword = await bcrypt.hash(password, 16);

    const user = new userModel({ name, email, password: hashPassword });
    await user.save();
    const token = jwt.sign({ name, email }, "amilieo");
    const response = NextResponse.json(
      {
        message: "User created successfully",
      },
      { status: 401 }
    );
    response.cookies.set("token", token);
    return response;
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
