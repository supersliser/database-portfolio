"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function SearchOptions({ orderBy, setOrderBy, orderDir, setOrderDir, setVisible }: { orderBy: string, setOrderBy: (v: string) => void, orderDir: string, setOrderDir: (v: string) => void, setVisible: (v: boolean) => void }) {
    console.log(orderBy);
    console.log(orderDir);

    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, right: 0, zIndex: 50, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <motion.div style={{ width: "50vw", height: "100vh", position: "absolute", top: "0", right: "0", zIndex: 10, backgroundColor: "black", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", gap: "3rem", padding: "3rem" }}>
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
        </motion.div>
        <div style={{ width: "50vw", height: "100vh", position: "absolute", top: "0", left: "0", zIndex: 50 }} onClick={() => setVisible(false)}></div>
    </motion.div>
}