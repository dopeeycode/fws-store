'use client'

import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { 
  HomeIcon, 
  ListOrderedIcon, 
  LogInIcon, 
  MenuIcon, 
  PercentCircleIcon, 
  ShoppingCartIcon 
} from 'lucide-react'
import ProfileContent from './ProfileContent'

const Header = () => {
  const { data, status } = useSession()

  async function handleLogin() {
    await signIn('google')
  }

  async function handleLogout(){
    await signOut()
  }

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <div className="mt-6 space-y-2">
            {status === 'authenticated' && data?.user? (
              <>
                <ProfileContent />
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={22} />
                  Sair
                </Button>
              </>
            ): (
              <Button 
              onClick={handleLogin}
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <LogInIcon size={22} />
                Fazer Login
            </Button>
            )}
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <HomeIcon size={22} />
                Inicio
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <PercentCircleIcon size={22} />
                Ofertas
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <ListOrderedIcon size={22} />
                Catálogo
            </Button>
          </div>

        </SheetContent>
      </Sheet>

      <h1 className="font-semibold text-lg">
        <span className="text-primary">FWS</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}

export default Header