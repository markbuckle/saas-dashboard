import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderMenu from "./header-menu";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
          <Image src="/logo.png" alt="Logo" width={120} height={200} />
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-black hover:bg-gray-300 hover:text-black">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-blue-400 ml-2 hover:bg-gray-300 hover:text-black">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
