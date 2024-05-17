'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { project } from "./project";
import Image from "next/image";

export default function ProjectList({ projects, activeProject, setActiveProject, orderBy }: { projects: project[], activeProject: number, setActiveProject: any, orderBy: string}) {
    var output = [];
    var lastDate = new Date(0, 0, 0, 0, 0, 0, 0);
    var lastLetter = "";


    const selectSpecificObject = (item: number) => {
        setActiveProject(item);
    }

    for (var i = activeProject; i < projects.length; i++) {
        if (orderBy == "date") {
            if (lastDate.getMonth() != new Date(projects[i].created).getMonth()) {
                lastDate = new Date(projects[i].created);
                output.push(<ProjectDateItem key={i + 0.1} month={lastDate.toLocaleString("default", { month: "long" })} year={lastDate.getFullYear()} active={i == activeProject}></ProjectDateItem>);
            }
            output.push(<ProjectListItem logo={projects[i].logoLink} i={i} last={i == projects.length - 1} onClick={selectSpecificObject} key={i} active={i == activeProject} name={projects[i].name}></ProjectListItem>);
        } else if (orderBy == "name") {
            if (lastLetter != projects[i].name[0]) {
                lastLetter = projects[i].name[0];
                output.push(<ProjectLetterItem key={i + 0.1} letter={lastLetter} active={i == activeProject}></ProjectLetterItem>);
            }
            output.push(<ProjectListItem logo={projects[i].logoLink} i={i} last={i == projects.length - 1} onClick={selectSpecificObject} key={i} active={i == activeProject} name={projects[i].name}></ProjectListItem>);
        }
    }


    const handleScroll = (e: any) => {
        if (e.deltaY < 0) {
            if (activeProject != 0) {
                setActiveProject(activeProject - 1);
            }
        } else if (e.deltaY > 0) {
            if (activeProject != projects.length - 1) {
                setActiveProject(activeProject + 1);
            }
        }
    }
    return <ul onTouchMove={handleScroll} onWheel={handleScroll} style={{ zIndex: -10, width: "40%", minHeight: "100%", backgroundAttachment: "fixed", position: "absolute", top: 0, left: 0 }}>{output}</ul>;
}

function ProjectDateItem({ month, year, active }: { month: string, year: number, active: boolean }) {
    return <motion.div key={month + year} style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
        <svg width={active ? 500 : 200} height="1"><line x1={0} y1={1} x2={active ? 500 : 200} y2={1} stroke="white"></line></svg>
        <p style={{ color: "white", fontSize: active ? "3rem" : "1.5rem", }}>{month}, {year}</p>
    </motion.div>
}

function ProjectLetterItem({ letter, active }: { letter: string, active: boolean }) {
    return <motion.div key={letter} style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
        <svg width={active ? 500 : 200} height="1"><line x1={0} y1={1} x2={active ? 500 : 200} y2={1} stroke="white"></line></svg>
        <p style={{ color: "white", fontSize: active ? "3rem" : "1.5rem", }}>{letter}</p>
    </motion.div>
}

function ProjectListItem({ name, logo, active, onClick, last, i }: { name: string, logo: string, active: boolean, onClick: (item: number) => void, last: boolean, i: number }) {
    return <motion.div whileHover={{ scaleY: active ? 1 : 1.2 }} whileTap={{ scaleY: active ? 1 : 0.9 }} onClick={() => onClick(i)} key={name} style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: active ? "start" : "center" }}>
        <svg width={50} height={active ? !last ? 400 : 50 : 50}><line x1={25} y1={0} x2={25} y2={active ? !last ? 400 : 50 : 50} stroke="white"></line></svg>
        <div style={{ display: "flex", flexDirection: active ? "column" : "row", justifyContent: "start", alignItems: active ? "start" : "center", gap: "0.5rem", marginLeft: "0.5rem" }}>
            <p style={{ color: "white", fontSize: active ? "3rem" : "1rem" }}>{name}</p>
            <Image src={logo} alt={"logo for " + { name }} width={active ? 300 : 50} height={active ? 300 : 50}></Image>
        </div>
    </motion.div>
}