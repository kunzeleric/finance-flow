import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getEnvironmentVariables } from "@/src/lib/supabase/env_variables";

export async function getSupabaseServerClient() {
  const { supabaseUrl, supabaseKey } = getEnvironmentVariables();
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch (error) {
          console.error(error);
        }
      },
    },
  });
}
