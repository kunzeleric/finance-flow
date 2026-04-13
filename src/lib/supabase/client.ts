import { createBrowserClient } from "@supabase/ssr";
import { getEnvironmentVariables } from "@/src/lib/supabase/env_variables";
import { SupabaseClient } from "@supabase/supabase-js";

type SupabaseSchema = Record<string, never>;

let client: SupabaseClient<SupabaseSchema> | null = null;

export function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  const { supabaseUrl, supabaseKey } = getEnvironmentVariables();

  client = createBrowserClient<SupabaseSchema>(supabaseUrl, supabaseKey);

  return client;
}
