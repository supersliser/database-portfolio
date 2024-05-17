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
export function SearchController({searchText, setSearchText, orderBy, setOrderBy, orderDir, setOrderDir}: {searchText: string, setSearchText: (v: string) => void, orderBy: string, setOrderBy: (v: string) => void, orderDir: string, setOrderDir: (v: string) => void}) {
    return <SearchBox orderBy={orderBy} setOrderBy={setOrderBy} orderDir={orderDir} setOrderDir={setOrderDir} searchText={searchText} setSearchText={setSearchText}></SearchBox>
}