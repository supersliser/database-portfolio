'use client'

import SearchBox from "./search";
import { project } from "./project";
import { useState } from "react";
import { tagData } from "./SearchOptions";

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
export function SearchController({searchText, setSearchText, orderBy, setOrderBy, orderDir, setOrderDir, tags, setTags, searchOptionsVisible, setSearchOptionsVisible}: {searchText: string, setSearchText: (v: string) => void, orderBy: string, setOrderBy: (v: string) => void, orderDir: string, setOrderDir: (v: string) => void, tags: tagData[], setTags: (v: tagData[]) => void, searchOptionsVisible: boolean, setSearchOptionsVisible: (v: boolean) => void}) {
    return <SearchBox tags={tags} setTags={setTags} orderBy={orderBy} setOrderBy={setOrderBy} orderDir={orderDir} setOrderDir={setOrderDir} searchText={searchText} setSearchText={setSearchText} searchOptionsVisible={searchOptionsVisible} setSearchOptionsVisible={setSearchOptionsVisible}></SearchBox>
}