import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from './ui/moving-border'
import Title from './Title'
import Image from 'next/image'

export default function HeroSection() {
  return <div className=' min-h-[100vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold'>
            Nice to meet you! 👍
            <br/> <span>{"I'm Sebastian Fuertes."}</span>
        </h1>
        <p className='md:w-96 text-lg text-gray-300'>
            {
                "Based in Colombia, I'm a Full Stack Developer specialized in creating new experiences through AI Engineering. I work using Python for backend development and Next.js for the frontend interface. I have experience exploring various cloud platforms."
            }
        </p>
        <Link href={"mailto:jsfuertesdev@gmail.com"} className='inline-block group'>
            <Title text="Contact Me 📬"/>
        </Link>
      </div>
        <div className='relative'>
            <div className='glow absolute top-[50%] right-2/4 -z-9'></div>
            <Image src="/lifeflower.png" alt="Flor de vida" width={380} height={380} />
            <div className='absolute top-40 right-0 sm:right-20'>
                <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
                    <p>📍 Available for Work</p>
                </MovingBorderBtn>
            </div>
        </div>
    </div>
}
