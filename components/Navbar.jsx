import Image from "next/image";
import Link from "next/link";
import HandleAuth from "./HandleAuth";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="object-cover h-[40px]"
            width={120}
            height={50}
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2">
            <Link href="/">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="/">About us</Link>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <HandleAuth />
          </li>
        </ul>
      </div>
    </nav>
  );
}
