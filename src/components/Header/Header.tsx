import Link from "next/link";

export default function Header() {
    return(

        <div>
            <nav>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/blog/post"}>Post</Link>
                <Link href={"/playground/find-play"}>Playground</Link>
                </nav>
        </div>
    )
}