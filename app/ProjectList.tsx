'use client'

import { act, useEffect, useState } from "react";
import { project } from "./project";
import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

export default function ProjectList({projects, activeProject, setActiveProject}: {projects: project[], activeProject: number, setActiveProject: any}) {
    var output = [];
    var lastDate = new Date(0, 0, 0, 0, 0, 0, 0);


    const [activeDate, setActiveDate] = useState(new Date(0, 0, 0, 0, 0, 0, 0))

    const selectSpecificObject = (item: number) => {
        setActiveProject(item);
        setActiveDate(new Date(projects[item].created.getFullYear(), projects[item].created.getMonth(), 0));
    }

    for (var i = activeProject; i < projects.length; i++) {
        if (lastDate.getMonth() != new Date(projects[i].created).getMonth()) {
            lastDate = new Date(projects[i].created);
            output.push(<ProjectDateItem key={i + 0.1} month={lastDate.toLocaleString("default", { month: "long" })} year={lastDate.getFullYear()} active={i == activeProject}></ProjectDateItem>);
        }
        output.push(<ProjectListItem logo={projects[i].logoLink} i={i} last={i == projects.length - 1} onClick={selectSpecificObject} key={i} active={i == activeProject} name={projects[i].name}></ProjectListItem>);
    }


    const handleScroll = (e: any) => {
        if (e.deltaY < 0) {
            if (activeProject != 0) {
                setActiveProject(activeProject - 1);
                setActiveDate(new Date(projects[activeProject].created.getFullYear(), projects[activeProject].created.getMonth(), 0));
            }
        } else if (e.deltaY > 0) {
            if (activeProject != projects.length - 1) {
                setActiveProject(activeProject + 1);
                setActiveDate(new Date(projects[activeProject].created.getFullYear(), projects[activeProject].created.getMonth(), 0));
            }
        }
    }
    return <ul onWheel={handleScroll} style={{ width: "80%", minHeight: "100vh", backgroundImage: "linear-gradient(to right,rgba(0, 12, 103, 1), rgba(0, 8, 150, 0))", position: "absolute", top: 0, left: 0 }}>{output}</ul>;
}

function ProjectDateItem({ month, year, active }: { month: string, year: number, active: boolean }) {
    return <div key={month + year} style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
        <svg width={active ? 500 : 200} height="1"><line x1={0} y1={1} x2={active ? 500 : 200} y2={1} stroke="white"></line></svg>
        <p style={{ color: "white", fontSize: active ? "3rem" : "1.5rem", }}>{month}, {year}</p>
    </div>
}

function ProjectListItem({ name, logo, active, onClick, last, i }: { name: string, logo: string, active: boolean, onClick: (item: number) => void, last: boolean, i: number }) {
    return <div onClick={() => onClick(i)} key={name} style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: active ? "start" : "center" }}>
        <svg width={50} height={active ? !last ? 400 : 50 : 50}><line x1={25} y1={0} x2={25} y2={active ? !last ? 400 : 50 : 50} stroke="white"></line></svg>
        <div style={{ display: "flex", flexDirection: active ? "column" : "row", justifyContent: "start", alignItems: active ? "start" : "center", gap: "0.5rem", marginLeft: "0.5rem" }}>
            <p style={{ color: "white", fontSize: active ? "3rem" : "1rem" }}>{name}</p>
            <Image src={logo} alt={"logo for " + { name }} width={active ? 300: 50} height={active ? 300 : 50}></Image>
        </div>
    </div>
}