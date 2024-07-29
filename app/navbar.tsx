import { motion } from "framer-motion";
import Document from "next/document";

export default function NavBar() {
  var items = [
    ["Home", "/"],
    ["About", "/about/"],
    ["Database", "/database/"],
    ["Guides", "https://programming-guides.vercel.app/"],
    ["Contact", "/contact/"],
  ];
  return (
    <div
      style={{
        width: "100vw",
        height:"30vh",
        position: "sticky",
        bottom: "100vh",
        top: "70vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "end",
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <a 
          href={item[1]}
          style={{
            paddingLeft: "5rem",
            margin: 0,
            color: "white",
            fontSize: "2rem",
            textAlign: "left",
            marginLeft: "2rem",
            borderWidth: "0px 1px 0px 0px",
            borderStyle: "solid",
            borderColor: "white",
            padding: "0.5rem",
          }}
        >
          {item[0]}
        </a>
      ))}
    </div>
  );
}
