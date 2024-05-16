// import packageJSON from "next-auth/package.json";
import CustomLink from "./custom-link";

export default function Footer() {
  return (
    <footer className="flex flex-row gap-4 px-4 my-4 mx-0 w-full text-xs text-slate-400 justify-between items-center sm:px-6 sm:my-12 sm:mx-auto sm:max-w-3xl sm:h-5">
      <div className="flex flex-row gap-4">
        <CustomLink href="/terms">Terms</CustomLink>
        <CustomLink href="/privacy">Privacy</CustomLink>
      </div>
      <div className="flex gap-2 justify-start items-center">
        <p>© 2024 Boilerplate. All rights reserved.</p>
      </div>
    </footer>
  );
}
