import NavBar from "./navbar";


export default function Home() {
    return (
        <main style={{backgroundColor: "black"}}>
            <div style={{ width: "100vw", paddingTop: "20vh", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "white", fontSize: "5rem"}}>Thomas Lower</h1>
            </div>
            <NavBar />
        </main>
    );
}