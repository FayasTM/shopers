import Container from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import { auth, signOut } from '@/auth'
import p1 from '@/app/assets/p1.jpg'

import { redirect } from 'next/navigation' 

const page = async() => {
    const session = await auth();

    // if(!session?.user){
    //     redirect("/");
    // }
  return (
    <Container className='py-10'>
        <h2 className='text-2xl font-semibold'>
            Welcome to Your Dashboard
        </h2>
        <div className='flex items-center gap-3 my-5'>
            {/* src= {session?.user?.image as string} */}
            <Image src={p1}  alt='userImage' 
            width={400} height={400}
            className='w-10 h-10 rounded-full'
            />
            {/* <div>
                <p>{session?.user?.name}</p>
                <p>{session?.user?.email}</p>
            </div> */}
            <div >
                <p>Mohamed Jamzeeth</p>
                <p>jamzeeth@gamil.com</p>
            </div>
        </div>
        <form action={async () => {
            "use server"
            await signOut();
            redirect("/");
        }}>
            <button 
            type= "submit"
            className='border bg-gray-50 border-gray-400 px-8
            py-2 text-sm font-semibold rounded-md hover:bg-gray-800
            hover:text-white hoverEffect'>
                Sign Out
            </button>
        </form>
    </Container>
  )
}

export default page