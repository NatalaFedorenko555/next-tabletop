import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-lg font-semibold text-gray-900">Tabletops</div>
      <nav className="flex flex-wrap gap-3 items-center">
        <Link href={"/blog"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        Blog
        </Link>
        <Link href={"/about"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        About
        </Link>
        <Link href={"/blog/post"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        Post
        </Link>
        <Link href={"/playground/find-play"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        Playground
        </Link>
        <Link href={"/users-client-ver"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        Users-Client
        </Link>
        <Link href={"/users-server-ver"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        Users-Server
        </Link>
        <Link href={"/products-server-version"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        Products-Server
        </Link>
        <Link href={"/products-client-version"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
        Products-Client
        </Link>
        <ThemeToggle/>  
      </nav>
      </div>
    </header>
  ); 
}
