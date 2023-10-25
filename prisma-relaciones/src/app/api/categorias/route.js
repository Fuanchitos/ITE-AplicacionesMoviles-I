import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// get categorias
export async function GET(){
    const categorias = await prisma.categoria.findMany()
    return NextResponse.json(categorias)
}

export async function POST(request){
    const {nombre} = await request.json()
    const nuevaCategoria = await prisma.categoria.create({
        data:{
            nombre
        }
    })
    return NextResponse.json(nuevaCategoria)
}