'use client'

import { useEffect, useState } from "react";
import { project, getProjects } from "./project";
import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

export default function ProjectList() {
    var output = [];
    var lastDate = new Date();

    const supabase = createClient();
    const [projects, setProjects] = useState([new project(0, "", new Date())]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error: err } = await supabase.from("projects").select()

            if (err) {
                console.error(err);
            } else {
                setProjects(data);
            }
        }

        fetchData();
    }, []);
    console.log(projects);

    for (var i = 0; i < projects.length; i++) {
        if (lastDate.getMonth() != new Date(projects[i].created).getMonth()) {
            lastDate = new Date(projects[i].created);
            output.push(<ProjectDateItem key={i+0.1} month={lastDate.toLocaleString("default", { month: "long" })} year={lastDate.getFullYear()}></ProjectDateItem>);
        }
        output.push(<ProjectListItem key={i} name={projects[i].name}></ProjectListItem>);
    }

    return <ul>{output}</ul>;
}

function ProjectDateItem({ month, year }: { month: string, year: number }) {
    return <div key={month + year} style={{margin: "1rem",padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <svg width="200" height="50"><line x1={0} y1={25} x2={200} y2={25} stroke="white"></line></svg>
        <p>{month}, {year}</p>
    </div>
}

function ProjectListItem({ name }: { name: string }) {
    return <div key={name} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <svg width={50} height={200}><line x1={25} y1={0} x2={25} y2={200} stroke="white"></line></svg>
        <div style={{margin: "1rem",padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><p>{name}</p></div>
    </div>
}