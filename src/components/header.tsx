// import { MainNav } from "./main-nav";
// import UserButton from "./user-button";

import Image from "next/image";
import { HamburgMenu } from "./HamburgMenu";
import { ModeToggle } from "./ModeToggle";
import CustomLink from "./custom-link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        {/* <MainNav />
        <UserButton /> */}
        <div className="flex">
          <a className="flex gap-2 items-center" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bird dark:text-white"
            >
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
              <path d="M10 18v3" />
              <path d="M14 17.75V21" />
              <path d="M7 18a6 6 0 0 0 3.84-10.61" />
            </svg>

            <h1 className="text-lg font-bold leading-tight tracking-tighter lg:leading-[1.1]">
              Boilerplate
            </h1>
          </a>
        </div>
        <div>
          <div className="hidden sm:flex gap-2">
            <CustomLink href="/auth">
              <Button>Login</Button>
            </CustomLink>
            <CustomLink href="/terms">
              <Button variant="ghost">Terms</Button>
            </CustomLink>
            <CustomLink href="/privacy">
              <Button variant="ghost">Privacy</Button>
            </CustomLink>
            <ModeToggle />
          </div>
          <div className="flex sm:hidden gap-2">
            <ModeToggle />
            <HamburgMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
