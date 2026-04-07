import { Button } from "@/components/ui/button";
import { signIn } from "@/src/lib/auth";

export function LoginForm() {
  return (
    <form
      className="flex flex-col gap-2 p-4 border border-white rounded-lg"
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          className="px-2 py-1.5 border rounded-lg border-gray-100"
          placeholder="seuemail@exemplo.com.br"
        />
      </div>
      <Button>Login</Button>
    </form>
  );
}
