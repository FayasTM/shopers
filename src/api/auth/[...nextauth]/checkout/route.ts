import { NextRequest, NextResponse } from "next/server"

export const POST = async(request:NextRequest) => {
    try{    
        const requestBody = await request.json();
        const {items, email} = requestBody;

        
        return NextResponse.json(
            {message:"success"},
            {status:200}
        )


    }catch(error){
        return NextResponse.json({error:"Something went wrong"},{status:500})
    }
}