import React, {ReactNode} from 'react'
import HeadTag from '../molecules/HeadTag'
import NavBot from './templates/NavBot'

interface TemplateProps {
  children: ReactNode
}
const Invitation = ({children}:TemplateProps) => {
  return(

    <React.Fragment>
      <HeadTag title="Invitation Reuni Akbar SMA U@"/>
      <div className="flex flex-col w-full min-h-screen bg-sky-200">
        <section className="flex flex-col flex-1">
          <div className="flex-1">
            <div className="flex-1 w-full sm:max-w-2xl mx-auto space-y-2 bg-white">
              {children}
            </div>
          </div>
        </section>

        {/* <NavBot/> */}
      </div>
    </React.Fragment>
  )  
}

export default Invitation