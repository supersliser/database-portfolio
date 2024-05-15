'use client'

import styled from "styled-components";
import { SearchController } from "./SearchController";
import ProjectList from "./ProjectList";
import { getProjects } from "./project";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

const MainPage = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    right : 0;
    bottom : 0;
    background-color: #131121;
    z-index:-20;
  `

export default function Home() {
  const supabase = createClient<Database>(
    "https://kesjdfgazvhmlugxqfys.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlc2pkZmdhenZobWx1Z3hxZnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2NDQ0ODQsImV4cCI6MjAzMTIyMDQ4NH0.6fQ6PHmcMLHhfHqPOH_Ep6sFt4HpPyTJ0-ru3P_rgqQ"
  );
  var projects = getProjects(supabase);
  if (projects == undefined) { projects = []; }
  return (
    <MainPage>
      <SearchController projects={projects}></SearchController>
      <ProjectList projects={projects}></ProjectList>
    </MainPage>
  );
}
