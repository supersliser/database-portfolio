'use client'

import SearchBox from "./search";
import { project } from "./project";
import { useState } from "react";

export async function Search(projects: project[], searchText: string) {
    if (searchText == "_") {
        return projects;
    }
    var output = [];
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].name.includes(searchText)) {
            output.push(projects[i]);
        }
    }
    return output;
}
export function SearchController() {

    const [searchText, setSearchText] = useState("_");

    return <SearchBox searchText={searchText} setSearchText={setSearchText}></SearchBox>
}