"use client";
import styled from "styled-components";
import NavBar from "../navbar";

export default function AbputPage() {
  return (
    <main style={{ backgroundColor: "black" }}>
      <div
        style={{
          width: "100vw",
          paddingTop: "20vh",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "5rem" }}>About Me</h1>
      </div>
      <NavBar />

      <div
        style={{
          marginTop: "5rem",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <div
          style={{
            width: "50vw",
          }}
        >
          <h2 style={{ color: "white", fontSize: "3rem" }}>Hi, Im Thomas</h2>
          <p
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            I'm a programmer and 3D artist
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            My favourite style of programming is Object Oriented however I am
            experienced in many other paradigms such as Event Driven,
            Declarative, Reactive and Procedural
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            My favourite language to work in is C# however I have plentiful
            experience in many other languages such as Python, JS/TS, Lua,
            C/C++, Rust, Dart/Flutter
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            In terms of 3D art my skills include:
          </p>
          <ul
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              Procedural 3D modelling using Blender Geometry Nodes, Maya Python
              Library or Houdini
            </li>
            <li>
              Shading and material generation using Adobe Substance (painter and
              designer)
            </li>
            <li>Rigging using Maya</li>
            <li>Sculpting using Blender or ZBrush</li>
            <li>Compositing using Nuke</li>
          </ul>

          <p
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            Ultimately, I do these things for the sheer passion and enjoyment.
            3D art allows me to express an otherwise hidden artistic side of
            myself and Computer science allows me to build things using
            programming.
          </p>

          <p
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            I am currently studying Computer Animation Technical Arts at
            Bournemouth University. This course trains me in both the artistic
            side of this discipline as well as the technical side of how the
            computer actually processes this and how to utilise this to its best
            ability.
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            While at BU I am also the faculty Representative for the faculty of
            Media and Communications which allows me to fully immerse myself in
            the inner workings of my university. As I have a continuous strong
            belief that beauty can be found in the inner workings of a
            mechanism, rather than simply focussing on that which is produced by
            it.
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            I have had a fair number of work positions throughout my life
            including:
          </p>
          <ul
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <li>NIHR funded research assistant - current</li>
            <li>Website Developer (front end and back end)</li>
            <li>3D modeller and texturer on a feature film</li>
            <li>Tutoring assistant</li>
            <li>Junior Technician</li>
          </ul>

          <p style={{ color: "white", fontSize: "1rem", marginTop: "3rem", marginBottom: "1rem" }}>I have had numerous achievments throughout my life such as reaching the rank of CPO (Chief Petty Officer) within the navy cadets, making me head of section within my contingent; A Black belt in MMA after 10 years of study and practice as well as 4 years of teaching</p>
        </div>
      </div>
    </main>
  );
}
