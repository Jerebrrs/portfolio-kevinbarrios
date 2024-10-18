'use client'
import Link from 'next/link'
import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri'

interface SocialProps {
    containerStyles?: string;  // Opcional
    iconStyles?: string;
    underLineStyles?: string;
}

const icons = [
    { path: 'https://www.linkedin.com/in/kevinjbarrios/', name: <RiLinkedinFill /> },
    { path: 'https://github.com/Jerebrrs', name: <RiGithubFill /> },

];
const Socials: React.FC<SocialProps> = ({ containerStyles = '', iconStyles = '', underLineStyles = '' }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return <Link href={icon.path} key={index} >
                    <div className={`${iconStyles}`} >{icon.name}</div>
                </Link>
            })}

        </div>
    )
}

export default Socials