"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function SignInSupa() {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
