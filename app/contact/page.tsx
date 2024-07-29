import NavBar from "../navbar";

export default function ContactPage() {
    var socialMedias = [
      ["LinkedIn", "https://www.linkedin.com/in/thomas-lower-234836245/"],
      ["Email", "mailto:thomaslower9@gmailcom"],
      ["Github", "https://github.com/supersliser"],

    ];
    return (
        <main style={{backgroundColor: "black"}}>
            <div style={{ width: "100vw", paddingTop: "20vh", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "white", fontSize: "5rem"}}>Contact</h1>
            </div>
            <NavBar />
            <div style={{ marginTop: "5rem", width: "100vw", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "start" }}>
                <div style={{ width: "50vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3rem"}}>Get in touch</h1>
                    {socialMedias.map((socialMedia) => (
                        <a 
                          href={socialMedia[1]}
                          style={{
                            color: "white",
                            fontSize: "2rem",
                            textAlign: "left",
                            marginTop: "2rem",
                            borderWidth: "3px",
                            borderRadius: "30px",
                            borderStyle: "solid",
                            borderColor: "white",
                            padding: "2rem",
                          }}
                        >
                          {socialMedia[0]}
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}