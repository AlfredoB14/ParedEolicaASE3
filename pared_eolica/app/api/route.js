import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
      const data = await request.json();
      const { propeller1, propeller2, propeller3, propeller4, propeller5 } = data;
  
      const result = await prisma.propellerData.create({
        data: {
          propeller1,
          propeller2,
          propeller3,
          propeller4,
          propeller5,
        },
      });
  
      return NextResponse.json({ result });
    } catch (error) {
      console.error(error);

      return NextResponse.json({ message: "Error creating data" }, { status: 500 });
    }
}

export async function GET() {
    const data = await prisma.propellerData.findMany();

    return NextResponse.json({ data });
}
