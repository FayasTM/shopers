import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import google from '@/app/assets/google.png'
import { auth, signIn } from '@/auth'
import { redirect } from 'next/navigation'



const SignInPage = async() => {
  const session = await auth();
  // if(!session?.user){
  //   redirect('/');
  // }
  return (
    <Container className='py-20 flex flex-col justify-center items-center'>
      <form 
      action={async()=> {
          "use server";
          await signIn("google", {redirectTo: "/"});
      }}
      
      className="flex items-center gap-1 border border-blue-50
      font-semibold bg-blue-50 px-4 py-1.5 rounded-md hover:bg-blue-800
      hover:text-white hoverEffect">
       <Image src={google} alt='Google' className='w-8'/>
        <button>
          Signin with Google
        </button>
      </form>
    </Container> 
  )
}

export default SignInPage