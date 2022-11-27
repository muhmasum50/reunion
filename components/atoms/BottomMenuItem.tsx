import React, {ReactNode} from 'react' 
import Link from "next/link"

const BottomMenuItem: React.FC<{isActive: boolean, children: ReactNode, link: string, name: string}> = ({
  isActive, children, link, name
}) => {
  return (
    <Link href={link}>
      <div 
        className={`inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md hover:text-blue-600 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}
        style={{ cursor:'pointer' }}
      >
        {children}
        <span className="text-xs truncate">{name}</span>
      </div>
    </Link>
  )
}

export default BottomMenuItem