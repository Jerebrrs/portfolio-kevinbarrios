'use client'
import CountUp from 'react-countup'

interface BadgeProps {
    containerStyles?: string;
    icon?: React.ReactNode;  // El tipo adecuado para un elemento JSX
    endCountNum?: number;
    endCountText?: string;
    badgeText: string;
}



const Badge: React.FC<BadgeProps> = ({ badgeText = '',
    containerStyles = '',
    endCountNum = 0,
    endCountText = '',
    icon }) => {
    return (
        <div className={`badge ${containerStyles}`}>
            <div className="text-3xl text-primary">
                {icon}
            </div>
            <div className='flex items-center gap-x-2'>
                <div className='text leading-none font-bold text-primary'><CountUp end={endCountNum} delay={1} duration={4} />{endCountText}</div>
            </div>
            <div className='max-w-[70px] leading-none text-[15px] font-medium text-black'>{badgeText}</div>
        </div>
    )
}

export default Badge