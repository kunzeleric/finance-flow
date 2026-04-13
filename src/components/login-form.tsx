"use client";

import { Field, FieldLabel } from "@/src/components/ui/field";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { getSupabaseBrowserClient } from "@/src/lib/supabase/client";

export function LoginForm() {
  const supabase = getSupabaseBrowserClient();

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
        skipBrowserRedirect: false,
      },
    });
  }

  return (
    <section className="flex flex-col gap-2 p-8 border border-white rounded-lg">
      <div className="flex flex-col gap-6 mb-4">
        <h1 className="text-3xl font-medium">Seja bem-vindo(a)!</h1>
        <p>Faça seu login utilizando sua conta Google!</p>
      </div>
      <form className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input type="email" name="email" placeholder="seu-email@gmail.com" />
        </Field>
        <Button type="button" onClick={handleGoogleLogin}>Login</Button>
      </form>
    </section>
  );
}
