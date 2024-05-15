'use client'

import { Search, SearchController } from "./SearchController";
import ProjectList from "./ProjectList";
import { createClient } from "@/utils/supabase/client";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
import { project } from "./project";

export default function Home() {
    const supabase = createClient();

  const [projects, setProjects] = useState([new project(0, "", new Date(), "", "")]);
  const [searchText, setSearchText] = useState("");
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error: err } = await supabase.from("projects").select().order("created", { ascending: false });

      if (err) {
        console.error(err);
      } else {
        setProjects(data.map((projectData) => new project(projectData.id, projectData.title, new Date(projectData.created), projectData.logoLink, projectData.bgImageLink)));
      }
    }

    fetchData();
  }, []);

  return (
    <main style={{backgroundImage: "url("+projects[activeProject].bgImageLink+")", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#131121", zIndex: -20, overflow: "hidden"}}>
      <SearchController searchText={searchText} setSearchText={setSearchText}></SearchController>
      <ProjectList projects={Search(projects, searchText)} activeProject={activeProject} setActiveProject={setActiveProject}></ProjectList>
    </main>
  );
}
