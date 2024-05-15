import styled from "styled-components";
import { project } from "./project";

export default function ProjectList({ projects }: { projects: project[] }) {
    var output = [];
    var lastDate = new Date();

    console.log(projects);

    for (var i = 0; i < projects.length; i++) {
        if (lastDate.getMonth() != new Date(projects[i].created).getMonth()) {
            lastDate = new Date(projects[i].created);
            output.push(<ProjectDateItem month={lastDate.toLocaleString("default", { month: "long" })} year={lastDate.getFullYear()}></ProjectDateItem>);
        }
        output.push(<ProjectListItem name={projects[i].name}></ProjectListItem>);
    }

    return <div>{output}</div>;
}


const ProjectDateItemContainer = styled.div`
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`
function ProjectDateItem({ month, year }: { month: string, year: number }) {
    return <ProjectDateItemContainer>
        <svg width="200" height="50"><line x1={0} y1={25} x2={200} y2={25} stroke="white"></line></svg>
        <p>{month}, {year}</p>
    </ProjectDateItemContainer>
}

const ProjectItemContainer = styled.div`
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function ProjectListItem({ name }: { name: string }) {
    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <svg width={50} height={200}><line x1={25} y1={0} x2={25} y2={200} stroke="white"></line></svg>
        <ProjectItemContainer><p>{name}</p></ProjectItemContainer>
    </div>
}