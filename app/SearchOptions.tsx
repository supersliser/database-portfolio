"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@/utils/supabase/client";

export class tagData {
    name: string
    active: boolean
    id: number
    constructor(name: string, active: boolean, id: number) {
        this.name = name;
        this.active = active;
        this.id = id;
    }
}

export default function SearchOptions({ orderBy, setOrderBy, orderDir, setOrderDir, setVisible, tags, setTags }: { orderBy: string, setOrderBy: (v: string) => void, orderDir: string, setOrderDir: (v: string) => void, setVisible: (v: boolean) => void, tags: tagData[], setTags: (v: tagData[]) => void }) {
    const supabase = createClient();

    const onClick = (text: string) => {
        const temp = tags;
        temp.find(t => t.name == text)!.active = !temp.find(t => t.name == text)!.active;
        setTags(temp);
    }
    return <motion.div key={"searchoptions"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: "100vw", height: "100vh", position: "absolute", top: "-50%", right: "-15%", zIndex: 50, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <motion.div key={"searchsettings"} style={{ width: "50vw", height: "100vh", position: "absolute", top: "0", right: "0", zIndex: 10, backgroundColor: "black", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", gap: "3rem", padding: "3rem" }}>
            <p style={{ color: "white", fontSize: "3rem" }}>Search Settings</p>
            <div>
                <p style={{ color: "white", fontSize: "2rem" }}>Order by:</p>
                <input type="radio" name="orderby" id="date" value="date" checked={orderBy === "date"} onChange={() => setOrderBy("date")} /><label htmlFor="date">Date</label><br />
                <input type="radio" name="orderby" id="name" value="name" checked={orderBy === "name"} onChange={() => setOrderBy("name")} /><label htmlFor="name">Name</label><br />
            </div>
            <div>
                <p style={{ color: "white", fontSize: "2rem" }}>Direction:</p>
                <input type="radio" name="direction" id="asc" value="asc" checked={orderDir === "asc"} onChange={() => setOrderDir("asc")} /><label htmlFor="asc">Ascending</label><br />
                <input type="radio" name="direction" id="desc" value="desc" checked={orderDir === "desc"} onChange={() => setOrderDir("desc")} /><label htmlFor="desc">Descending</label><br />
            </div>
            <div>
                <p style={{ color: "white", fontSize: "2rem" }}>Tags:</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <motion.div key={"clear"} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setTags(tags.map((tag) => new tagData(tag.name, false, tag.id)))} style={{ borderRadius: "500px", borderWidth: "3px", borderStyle: "solid", borderColor: "white", backgroundColor: "black", padding: "1rem", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                        <p style={{ color: "white", fontSize: "1.5rem" }}>Clear</p>
                    </motion.div>
                    <motion.div key={"all"} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setTags(tags.map((tag) => new tagData(tag.name, true, tag.id)))} style={{ borderRadius: "500px", borderWidth: "3px", borderStyle: "solid", borderColor: "white", backgroundColor: "black", padding: "1rem", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                        <p style={{ color: "white", fontSize: "1.5rem" }}>All</p>
                    </motion.div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", flexWrap: "wrap" }}>
                    {tags.map((tag) => <motion.div key={tag.name} onClick={() => onClick(tag.name)} style={{ borderRadius: "500px", borderWidth: "3px", borderStyle: "solid", borderColor: "white", backgroundColor: tag.active ? "white" : "black", padding: "1rem", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <p style={{ color: tag.active ? "black" : "white", fontSize: "1rem" }}>{tag.name}</p>
                    </motion.div>)}
                </div>
            </div>
        </motion.div>
        <div key={"background"} style={{ width: "50vw", height: "100vh", position: "absolute", top: "0", left: "0", zIndex: 50 }} onClick={() => setVisible(false)}></div>
    </motion.div>
}