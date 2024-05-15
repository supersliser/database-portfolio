import { SearchController } from "./SearchController";
import ProjectList from "./ProjectList";
import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/supabase";
import { cookies } from 'next/headers'

export default function Home() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
  return (
    <main style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#131121", zIndex: -20, overflow: "hidden"}}>
      <SearchController></SearchController>
      <ProjectList></ProjectList>
    </main>
  );
}
