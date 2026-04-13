import { getSupabaseBrowserClient } from "@/src/lib/supabase/client";

export default async function Home() {
  const supabase = getSupabaseBrowserClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1>Home page</h1>
      <div>
        <h2>User</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
