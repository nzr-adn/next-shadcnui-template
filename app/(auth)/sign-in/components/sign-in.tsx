"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full">Sign In</Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don’t have an account yet?{" "}
            <Link
              href="/sign-up"
              className="underline underline-offset-4 hover:text-primary"
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
