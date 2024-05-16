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
  }, [window.innerHeight]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return document.documentElement.clientWidth < document.documentElement.clientHeight ? <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>Please rotate your device to be in landscape mode and refresh</div> :
    <main style={{ backgroundImage: "url(" + projects[activeProject].bgImageLink + ")", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", backgroundColor: "argb(0,0,0,0)", position: "absolute", top: 0, left: 0, right: 0, zIndex: -20, minHeight: "100vh" }}>
      <div style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, zIndex: -10, backgroundImage: "linear-gradient(to right, rgba(19, 17, 33, 1) 40%, rgba(19, 17, 33, 0))", }}>
        <SearchController searchText={searchText} setSearchText={setSearchText}></SearchController>
        <ProjectList projects={Search(projects, searchText)} activeProject={activeProject} setActiveProject={setActiveProject}></ProjectList>
        <PageData projects={projects} activeProject={activeProject}></PageData>
      </div>
    </main>;
}
