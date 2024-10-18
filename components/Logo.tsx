import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.jpg'

export const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src={logo} width={54} height={54} priority alt=""/>
        </Link>
    )
}
