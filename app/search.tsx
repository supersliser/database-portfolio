"use client"

import { useState } from "react";
import styled from "styled-components"
import { motion } from "framer-motion";
import SearchOptions, { tagData } from "./SearchOptions";
import Image from "next/image";

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

export default function SearchBox({ searchText, setSearchText, orderBy, setOrderBy, orderDir, setOrderDir, tags, setTags, searchOptionsVisible, setSearchOptionsVisible }: { searchText: string, setSearchText: (v: string) => void, orderBy: string, setOrderBy: (v: string) => void, orderDir: string, setOrderDir: (v: string) => void, tags: tagData[], setTags: (v: tagData[]) => void , searchOptionsVisible: boolean, setSearchOptionsVisible: (v: boolean) => void }) {
    const [focussed, setFocussed] = useState(false);

    return <div style={{margin: "1rem",position: "absolute", right: "1.5%", top: "2%", zIndex: "10", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setFocussed(true)} style={{
            backgroundColor: "#131121",
            borderTopLeftRadius: "35px",
            borderBottomLeftRadius: "35px",
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: "white",
            padding: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
        }}>
            {
                !focussed && searchText == "" ?
                    <p style={{ fontSize: "1.5rem", color: "white" }}>Search</p>
                    :
                    <SearchInputBox id="SearchInput" name="SearchInput" type="text" onBlur={() => setFocussed(false)} onChange={v => setSearchText(v.target.value)} autoFocus={true} value={searchText}></SearchInputBox>
            }

        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSearchOptionsVisible(true)} style={{
            backgroundColor: "#131121",
            borderTopRightRadius: "35px",
            borderBottomRightRadius: "35px",
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: "white",
            padding: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
        }}><Image src="https://cdn.discordapp.com/attachments/1240362204310671420/1240817414065623091/settings-cog-svgrepo-com.png?ex=6647f0c4&is=66469f44&hm=d6b564679677aa32764e4571e16545fff91fce90a6a78169cd8bc12ffde10d14&" alt="search settings" height={25} width={25}></Image>
        </motion.div>
        {
            searchOptionsVisible ? <SearchOptions tags={tags} setTags={setTags} setVisible={setSearchOptionsVisible} orderBy={orderBy} setOrderBy={setOrderBy} orderDir={orderDir} setOrderDir={setOrderDir}></SearchOptions> : null
        }
    </div>
}

