'use client'

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { project } from "./project";
import Image from "next/image";
import Link from "next/link";


class outputItem {
    order: number;
    content: any;

    constructor(order: number, content: any) {
        this.order = order;
        this.content = content;
    }
}

function hashTag({tag} : {tag: string}) {
    return <span key={tag} style={{ color: "hotpink", fontSize: "1rem" }}> #{tag.replaceAll(" ", "")} </span>
}

export default function PageData({ projects, activeProject }: { projects: project[], activeProject: number }) {
    const supabase = createClient();
    var [output, setOutput] = useState([new outputItem(0, <p key={"data.text"} style={{ color: "white", fontSize: "1rem" }}>Loading...</p>)]);
    var [loaded, setLoaded] = useState(false);
    var [tagOutput, setTagOutput] = useState([""]);
    useEffect(() => {
        const fetchData = async () => {
            const { data, error: err } = await supabase.from("projectPageTextData").select().eq("projectid", loaded ? projects[activeProject].id : projects[activeProject].id + 1);
            const { data: temptags, error: err2 } = await supabase.from("projecttags").select().eq("projectid", loaded ? projects[activeProject].id : projects[activeProject].id + 1);
            var tags : string[] = [];
            for (var i = 0; i < temptags!.length; i++) {
                const {data : tag, error: err3 } = await supabase.from("tags").select().eq("id", temptags![i].tagid);
                if (!err3) {
                    tags.push(tag![0].name);
                }
            }
            if (!loaded) {
                setLoaded(true);
            }
            if (err || err2) {
                console.error(err);
                console.error(err2);
            } else {
                setOutput(data.map((data) => new outputItem(data.ordering,
                    <div key={data.ordering} style={{ display: "flex", flexDirection: data.textaboveimage ? "column" : "column-reverse", justifyContent: "center", alignItems: "start" }}>
                        {data.text != null ?
                            <p style={{ color: "white", marginTop: data.istitle ? "3rem" : data.continuous ? "-0.5rem" :"0.5rem", marginBottom: data.continuous ? "-0.5rem" : "0.5rem", fontSize: data.iscaption ? "0.75rem" : data.istitle ? "2.5em" : "1.25rem" }} key={data.text}>
                                {data.linkdestination ?
                                    <span><span>{data.text.split("{link}")[0]}</span><Link style={{ color: "green" }} href={data.linkdestination}>{data.linkplaceholder}</Link><span>{data.text.split("{link}")[1]}</span></span>
                                    : data.text}
                            </p>
                            : <></>}
                        {data.image != null && data.image != "" ?
                            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><img width={500} key={data.image} src={supabase.storage.from("Document").getPublicUrl(data.image).data.publicUrl} alt={data.text} ></img></div>
                            : <></>}
                    </div>
                )));
                setTagOutput(tags);
            };
        }

        fetchData();
    }, [activeProject]);

    return <ul key={"ef u"} style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: "1rem", position: "relative", top: "0%", marginTop: "15%", left: "35%", width: "65%", height: "70%", backgroundColor: "rgba(0, 0, 0, 0.0)", backgroundAttachment: "fixed", marginBottom: "5rem", overflow: "auto"}}>
        {output.sort((a, b) => a.order - b.order).map((item) => item.content)}
        <div key={"djfsijnkdsnjkfdsnjkdfs"}>{tagOutput.map((item) => hashTag({ tag: item }))}</div>
    </ul>
}