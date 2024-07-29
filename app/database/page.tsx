'use client'

import { Search, SearchController } from "../SearchController";
import ProjectList from "../ProjectList";
import { createClient } from "@/utils/supabase/client";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
import { project } from "../project";
import { tagData } from "../SearchOptions";
import PageData from "../pageData";

export default function DatabasePage() {
  const supabase = createClient();

  const [projects, setProjects] = useState([new project(0, "", new Date(0, 0, 0, 0, 0, 0, 0), "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png", true)]);
  const [searchText, setSearchText] = useState("");
  const [activeProject, setActiveProject] = useState(0);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("date");
  const [orderDir, setOrderDir] = useState("desc");
  const [tags, setTags] = useState([new tagData("Date", true, -1)]);
  const [gotTags, setGotTags] = useState(false);
  const [searchOptionsVisible, setSearchOptionsVisible] = useState(false);



  useEffect(() => {
    const fetchData = async () => {

      if (!gotTags) {
        const { data: tagsint, error: err3 } = await supabase.from("tags").select();
        if (err3) {
          console.error(err3);
        } else {
          setTags(tagsint.map((tagDataa) => new tagData(tagDataa.name, true, tagDataa.id)));
        }
        setGotTags(true);
      }


      var dataIgnore: number[] = [];
      const { data, error: err } = await supabase.from("projects").select().order(orderBy == "date" ? "created" : "title", { ascending: orderDir == "asc" });
      if (err) {
        console.error(err);
      } else {
        for (var i = 0; i < data.length; i++) {
          const { data: tagsData, error: tagsErr } = await supabase.from("projecttags").select().eq("projectid", data[i].id);
          if (tagsErr) {
            console.error(tagsErr);
          } else {
            var temp = 0;
            for (var j = 0; j < tagsData.length; j++) {
              for (var k = 0; k < tags.length; k++) {
                if (tagsData[j].tagid == tags[k].id && tags[k].active == false) {
                  temp++;
                }
              }
            }
            if (temp == tagsData.length) {
              dataIgnore.push(data[i].id);
            }
          }
        }
        var tempProjects: project[] = [];
        setProjects(data.map((dataitem) =>  {
          var { data: logo } = supabase.storage.from("Icons").getPublicUrl(dataitem.logoname)
          var { data: background } = supabase.storage.from("Background").getPublicUrl(dataitem.bgimagename)

          return new project(dataitem.id, dataitem.title, new Date(dataitem.created), logo.publicUrl, background.publicUrl, !dataIgnore.includes(dataitem.id))
        }));
      }
    }
    fetchData();
    setLoading(false);
  }, [orderBy, orderDir, searchOptionsVisible]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return document.documentElement.clientWidth < document.documentElement.clientHeight ? <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>Please rotate your device to be in landscape mode and refresh</div> :
    <main style={{ backgroundImage: "url(" + projects[activeProject].bgImageLink + ")", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "auto 100%", backgroundPosition: "right", backgroundColor: "argb(0,0,0,0)", position: "absolute", top: 0, left: 0, right: 0, zIndex: -20, minHeight: "100vh" }}>
      <div style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, zIndex: -10, backgroundImage: "linear-gradient(to right, rgba(19, 17, 33, 1) 40%, rgba(19, 17, 33, 0))", }}>
        <SearchController searchOptionsVisible={searchOptionsVisible} setSearchOptionsVisible={setSearchOptionsVisible} tags={tags} setTags={setTags} orderBy={orderBy} setOrderBy={setOrderBy} orderDir={orderDir} setOrderDir={setOrderDir} searchText={searchText} setSearchText={setSearchText}></SearchController>
        <ProjectList orderBy={orderBy} projects={Search(projects, searchText)} activeProject={activeProject} setActiveProject={setActiveProject}></ProjectList>
        <PageData projects={Search(projects, searchText)} activeProject={activeProject}></PageData>
      </div>
    </main>;
}
