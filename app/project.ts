'use client'
import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables, Enums } from "@/types/supabase";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export class project {
    id: number;
    name: string;
    created: Date;
    constructor(id: number, name: string, createdDate: Date) {
        this.id = id;
        this.name = name;
        this.created = createdDate;
    }
}

export function getProjects() {
    const supabase = createClient();
    const [projects, setProjects] = useState([new project(0, "", new Date())]);

    useEffect(() => {
        const fetchData = async () => {
            const {data, error: err} = await supabase.from("projects").select("*")

            if (err) {
                console.error(err);
            } else {
                setProjects(data);
            }
        }

        fetchData();
    }, []);
    return projects

    // const getProjectsAsync = useCallback(async () => {
    //     const { data, error } = await supabase.from("projects")
    //         .select("id, title, created")
    //         .order("created", { ascending: false });

    //     if (error) {
    //         console.log(error);
    //         return;
    //     }
    //     console.log(data);
    //     data.forEach((element) => {
    //         console.log(element);
    //         projects.push(
    //             new project(element["id"], element["title"], element["created"])
    //         );
    //     });

    //     return projects;
    // }, [projects, supabase])

    // useEffect(() => {
    //     getProjectsAsync();
    // }, [projects, getProjectsAsync]);
    // return projects;
}