import React from 'react'
import Image from 'next/image'

interface MeetingTypeItemProps {
    img: string,
    color: string,
    title: string,
    description: string,
    handleClick: () => void
}

const MeetingTypeItem = ({color, title, description,img, handleClick}: MeetingTypeItemProps) => {
    return(
        <div className={`bg-${color}-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`} onClick={handleClick}>
                <div className='flex-center glassmorphism size-12 rounded-[14px]'>
                    <Image src={img} alt='add meeting' width={27} height={27}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-lg font-normal'>{description}</p>
                </div>
        </div>
    )
}

export default MeetingTypeItem