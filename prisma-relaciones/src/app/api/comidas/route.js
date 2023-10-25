import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// get comidas
export async function GET(){
    const comidas = await prisma.comidas.findMany(
        {
            include: {categoria: true}
        }
    )
    return NextResponse.json(comidas)
}

export async function POST(request){
    const {nombre, ingredientes, categoriaId} = await request.json()
    const nuevaComida = await prisma.comidas.create({
        data:{
            nombre,
            ingredientes,
            categoriaId
        }
    })
    return NextResponse.json(nuevaComida)
}