import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.png'

export const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src={logo} width={75} height={75} priority alt=""/>
        </Link>
    )
}
