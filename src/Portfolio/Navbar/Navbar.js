import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <ul>
                <Link href={"/home"}>
                    <li>home</li>
                </Link>
                <Link href={"/about"}>
                    <li>about</li>
                </Link>
            </ul>
        </nav>
    );
}