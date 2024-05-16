"use client";

import * as React from "react";
import { FileText, LogIn, Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomLink from "./custom-link";
import { ModeToggle } from "./ModeToggle";

export function HamburgMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="p-0">
          <Button className="w-full flex justify-start">
            <CustomLink href="/auth" className="flex">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </CustomLink>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Button variant="ghost" className="w-full flex justify-start">
            <CustomLink href="/terms" className="flex">
              <FileText className="mr-2 h-4 w-4" />
              Terms
            </CustomLink>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Button variant="ghost" className="w-full flex justify-start">
            <CustomLink href="/privacy" className="flex">
              <Shield className="mr-2 h-4 w-4" />
              Privacy
            </CustomLink>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
