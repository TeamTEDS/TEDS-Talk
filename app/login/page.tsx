"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

export default function LoginForm() {
  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <button
        onClick={handleSignIn}
        className="hover:bg-gray-800 p-8 rounded-xl"
      >
        <Image
          className="mx-auto mb-3"
          src="/discord.png"
          width={100}
          height={100}
          alt="Discord logo"
        />
        Sign in with Discord
      </button>
    </div>
  );
}
