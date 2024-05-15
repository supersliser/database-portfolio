'use client'

import SearchBox from "./search";
import { project } from "./project";
import { useState } from "react";

export function Search(projects: project[], searchText: string) {
    if (searchText == "") {
        return projects;
    }
    var output = [];
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].name.toLowerCase().includes(searchText)) {
            output.push(projects[i]);
        }
    }
    return output;
}
export function SearchController({searchText, setSearchText}: {searchText: string, setSearchText: (v: string) => void}) {
    return <SearchBox searchText={searchText} setSearchText={setSearchText}></SearchBox>
}