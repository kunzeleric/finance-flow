import { LoginForm } from "@/src/components/login-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <section className="">
        <h1 className="text-3xl mb-4">Bem vindo(a)!</h1>
        <LoginForm />
      </section>
    </div>
  );
}
