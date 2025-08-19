import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Project from "@/components/Project";
import ParticlesJS from "@/components/ParticlesJS";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Modal from "@/components/Modal";
import { AnimatePresence } from "framer-motion";
import projects from "../resources/projects.json";
import Background from "@/components/Background";

export default function Home() {
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    darkTheme
      ? document.getElementsByTagName("html")[0].removeAttribute("dark")
      : document.getElementsByTagName("html")[0].setAttribute("dark", "true");
  };

  const prefersDarkTheme = () => {
    return (
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  useEffect(() => {
    if (!prefersDarkTheme()) toggleTheme();
  }, []);

  const [isParticlesOn, setIsParticlesOn] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);
  const [project, setProject] = useState(0);

  const techs = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Typescript",
    "Angular",
    "React",
    "NextJS",
    "NX",
    "Jest",
    "Redux",
    "Copilot",
    "Git",
    "Azure",
    "Vercel",
    "Notion",
  ];

  const hobbies = [
    "🎮 Videogames",
    "🏯 Japanese culture",
    "🎸 Music",
    "⛰️ Exploring",
    "🍣 Cooking",
  ];

  return (
    <>
      <Head>
        <title>Sora</title>
        <meta name="description" content="Sora website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sora/favicon.png" />
      </Head>
      <AnimatePresence>
        {!!project && (
          <Modal
            onclose={() => {
              document.body.style.overflow = "";
              setProject(0);
            }}
            dark={darkTheme}
            project={projects[project - 1]}
          />
        )}
      </AnimatePresence>
      <div className={styles["particles-button"]}>
        <Button onClick={() => setIsParticlesOn(!isParticlesOn)}>
          <span style={isParticlesOn ? {} : {filter: 'contrast(0)'}}>{darkTheme ? "✨" : "☃️"}</span>
        </Button>
        <Button onClick={toggleTheme}>{darkTheme ? "🌙" : "☀️"}</Button>
      </div>
      <main className={`animate-opacity ${styles.main}`}>
        <Background></Background>
        {isParticlesOn && (
          <ParticlesJS dark={darkTheme} on={isParticlesOn}></ParticlesJS>
        )}
        <div className={styles.container}>
          <Card title={"Hello!"}>
            <div className={styles.presentation}>
              <span onClick={toggleTheme} className={styles["toggle-theme"]}>
                {darkTheme ? "🌙 Good night!" : "☀️ Good morning!"}
              </span>
              <div>
                <h1>
                  This is{" "}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/daniel-larrosa-5449769a/"
                  >
                    Dani Larrosa
                  </a>
                </h1>
                <h2 className={styles.subtitle}>Also known as Ross</h2>
                <h2 className={styles.subtitle}>
                  Frontend Developer from Barcelona
                </h2>
              </div>
              <div>
                <h2>Main techs I use</h2>
                <div className={styles.chips}>
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className={`${styles["chip"]} ${styles["chip--small"]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2>Some things I love</h2>
                <div className={styles.chips}>
                  {hobbies.map((hobby) => (
                    <span key={hobby} className={styles.chip}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.work}>
                <span className={styles.subtitle}>
                  <a target="_blank" href="https://github.com/roselcost">
                    💻 My code
                  </a>
                </span>
                <span className={styles.subtitle}>
                  <a
                    target="_blank"
                    href="https://elrascacielosdeshinjuku.substack.com"
                  >
                    🪶 My articles
                  </a>
                </span>
              </div>
            </div>
          </Card>
          <Card title={"Projects"}>
            <div className={styles.projects}>
              {projects.map((project) => (
                <Project
                  onClick={() => {
                    document.body.style.overflow = "hidden";
                    setProject(project.id);
                  }}
                  project={project}
                  key={project.title}
                ></Project>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
