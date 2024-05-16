'use client'

import { Search, SearchController } from "./SearchController";
import ProjectList from "./ProjectList";
import { createClient } from "@/utils/supabase/client";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
import { project } from "./project";
import PageData from "./pageData";

export default function Home() {
    const supabase = createClient();

  const [projects, setProjects] = useState([new project(0, "", new Date(0, 0, 0, 0, 0, 0, 0), "", "")]);
  const [searchText, setSearchText] = useState("");
  const [activeProject, setActiveProject] = useState(0);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main style={{ backgroundImage: "url(" + projects[activeProject].bgImageLink + ")", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", backgroundColor: "argb(0,0,0,0)", position: "absolute", top: 0, left: 0, right: 0, zIndex: -20, minHeight: "100vh" }}>
      <SearchController searchText={searchText} setSearchText={setSearchText}></SearchController>
      <ProjectList projects={Search(projects, searchText)} activeProject={activeProject} setActiveProject={setActiveProject}></ProjectList>
      <PageData projects={projects} activeProject={activeProject}></PageData>
    </main>
  );
}
