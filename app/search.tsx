"use client"

import { useState } from "react";
import styled from "styled-components"

const SearchInputBox = styled.input`
    width: 100%;
    height: 100%;
    color: white;
    border: none;
    background-color: transparent;
    outline: none;
        font-size: 1.5rem;
`

const SearchTextDom = styled.p`
    font-size: 1.5rem;
    color: white;
`

const OutlineItem = styled.div`
        background-color: #131121;
        margin: 1rem;
        border-radius: 35px;
        border-width: 3px;
        border-style: solid;
        border-color: white;
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        position: absolute;
        right: 5%;
        top: 2%;
        z-index: 10;
    `;

export default function SearchBox({ searchText, setSearchText }: { searchText: string, setSearchText: (v: string) => void }) {
    const [focussed, setFocussed] = useState(false);

    return <OutlineItem onClick={() => setFocussed(true)}>
        {
            !focussed ?
                <SearchTextDom>Search</SearchTextDom>
                :
                <SearchInputBox id="SearchInput" name="SearchInput" type="text" onBlur={() => setFocussed(false)} onChange={v => setSearchText(v.target.value)} autoFocus={true} value={searchText == "_" ? "" : searchText}></SearchInputBox>
        }
    </OutlineItem>
}

