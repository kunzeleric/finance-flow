import { Field, FieldDescription, FieldLabel } from "@/src/components/ui/field";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { signIn } from "@/src/lib/auth";
import {} from "lucide-react";

export function LoginForm() {
  return (
    <section className="flex flex-col gap-2 p-8 border border-white rounded-lg">
      <div className="flex flex-col gap-6 mb-4">
        <h1 className="text-3xl font-medium">Seja bem-vindo(a)!</h1>
        <p>Faça seu login utilizando sua conta Google!</p>
      </div>
      <form
        className="flex flex-col gap-4"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input type="email" name="email" placeholder="seu-email@gmail.com" />
        </Field>
        <Button type="submit">Login</Button>
      </form>
    </section>
  );
}
