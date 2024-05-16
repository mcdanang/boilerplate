// import { MainNav } from "./main-nav";
// import UserButton from "./user-button";

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
          <ModeToggle />
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
            <HamburgMenu />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
