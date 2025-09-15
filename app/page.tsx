import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center justify-center gap-3 animate-fadeIn">
          <h1 className="text-4xl font-semibold">There's nothing here</h1>
          <p className="text-gray-500">Sign in to view your dashboard</p>
          <Button
            asChild
            className="transition-transform duration-200 hover:scale-105"
          >
            <Link href="/auth">Sign in</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
