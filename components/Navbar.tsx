'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Navbar () {
    const router = useRouter()
    return(
        <>
            <div className="navbar sticky top-0 z-50 flex justify-between items-center p-4 shadow-md">
                <div className="logo">
                    <h1 className="text-black font-bold text-xl">Buildboard</h1>
                </div>

                <div className="nav_links flex items-center gap-5">
                    <Link className="font-bold text-md" href="/">Home</Link>
                    <Link className="font-bold text-md" href="/">Support</Link>
                    <Link className="font-bold text-md" href="/">Discord</Link>
                    <Link className="font-bold text-md" href="/">Contact</Link>
                </div>

                <div className="cta_buttons flex items-center gap-4">
                    <Button className="bg-black text-white font-bold flex items-center gap-5 px-6 py-5 border shadow-md rounded-lg">
                        GitHub
                    </Button>
                    <Button onClick={() => router.push("/auth")} className="bg-white text-black font-bold flex items-center gap-5 px-6 py-5 border shadow-md rounded-lg">
                        Sign in
                    </Button>
                </div>
            </div>
        </>
    )
}