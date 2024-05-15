import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables } from "@/types/supabase";

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

export async function getProjects(supabase: SupabaseClient) {
    var projects: project[] = [];
    const { data, error } = await supabase.from("projects")
        .select("*")
        .order("created", { ascending: false });

    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
    data.forEach((element) => {
        console.log(element);
        projects.push(
            new project(element["id"], element["title"], element["created"])
        );
    });

    return projects;
}