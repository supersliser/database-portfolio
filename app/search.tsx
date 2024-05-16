"use client"

import { useState } from "react";
import styled from "styled-components"
import { motion } from "framer-motion";

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

    return <motion.div style={{
        backgroundColor: "#131121",
        margin: "1rem",
        borderRadius: "35px",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "white",
        padding: "1rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        position: "absolute",
        right: "5%",
        top: "2%",
        zIndex: "10",
    }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setFocussed(true)}>
        {
            !focussed ?
                <p style={{ fontSize: "1.5rem", color: "white" }}>Search</p>
                :
                <SearchInputBox id="SearchInput" name="SearchInput" type="text" onBlur={() => setFocussed(false)} onChange={v => setSearchText(v.target.value)} autoFocus={true} value={searchText == "_" ? "" : searchText}></SearchInputBox>
        }
    </motion.div>
}

