import React, {ReactNode} from 'react'
import Navbar from './templates/Navbar'
import NavBot from './templates/NavBot'

interface TemplateProps {
  children: ReactNode
}
const Layout = ({children}:TemplateProps) => {
  return(
    <div className="flex flex-col w-full min-h-screen bg-white">
    <Navbar/>
    <section className="flex flex-col flex-1 py-16">
      <div className="flex-1">
        <div className="flex-1 w-full sm:max-w-2xl mx-auto space-y-2">
          {children}
        </div>
      </div>
    </section>

    <NavBot/>
  </div>
  )  
}

export default Layout