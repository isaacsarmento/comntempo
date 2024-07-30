import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { Button } from '../ui/button'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from './user-nav';

type Props = {}

const Navbar = async (props: Props) => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser()
  return (
    <nav className='border-b bg-background h-[10vh] flex items-center z-1000'>
        <div className='container flex items-center justify-between'>
            <Link
                href="/"
            >
                <h1 className='font-bold text-3xl'>comn<span className='text-primary'>tempo.</span></h1>
            </Link>

            <div className='flex items-center gap-x-5'>
                <ThemeToggle />
            
          {(await isAuthenticated()) ? (
            <UserNav email={user?.email as string} image={user?.picture as string} name={user?.given_name as string} />
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink postLoginRedirectURL='/mapa'>
                <Button>Entrar</Button>
              </LoginLink>

              <RegisterLink postLoginRedirectURL='/mapa'>
                <Button variant="secondary" className="hidden lg:flex">Registrar</Button>
              </RegisterLink>
            </div>
          )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar