import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
    createBrowserClient(
        "https://kesjdfgazvhmlugxqfys.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlc2pkZmdhenZobWx1Z3hxZnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2NDQ0ODQsImV4cCI6MjAzMTIyMDQ4NH0.6fQ6PHmcMLHhfHqPOH_Ep6sFt4HpPyTJ0-ru3P_rgqQ",
    );
