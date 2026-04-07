import { Field, FieldDescription, FieldLabel } from "@/src/components/ui/field";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { signIn } from "@/src/lib/auth";

export function LoginForm() {
  return (
    <section className="flex flex-col gap-2 p-4 border border-white rounded-lg">
      <h1 className="text-3xl mb-4">Bem vindo(a)!</h1>
      <form
        className="flex flex-col gap-4"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input type="email" name="email" placeholder="email@exemplo.com.br" />
        </Field>
        <Button type="submit">Login</Button>
      </form>
    </section>
  );
}
