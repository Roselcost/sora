import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Project from "@/components/Project";
import ParticlesJS from "@/components/ParticlesJS";
import { useEffect, useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const projects = [
    {
      title: "Codename Cafe",
      icon: "☕️",
      image: "codenamecafe.jpg",
      url: "https://roselcost.github.io/CodenameCafe/",
      gitHub: "https://github.com/Roselcost/CodenameCafe",
      techs: ["Angular", "Typescript", "Redux"],
    },
    {
      title: "Shin Kiwami",
      icon: "🐉",
      image: "shinkiwami.jpg",
      url: "https://roselcost.github.io/shinkiwami/",
      gitHub: "https://github.com/Roselcost/shinkiwami",
      techs: ["React", "Typescript", "Redux"],
    },
    {
      title: "Mario Kart Tracker",
      icon: "🏁",
      image: "mariokarttracker.jpg",
      url: "https://roselcost.github.io/mariokarttracker/",
      gitHub: "https://github.com/Roselcost/mariokarttracker",
      techs: ["React", "Typescript", "Redux"],
    },
    {
      title: "Topsters 4",
      icon: "🖼️",
      image: "mariokarttracker.jpg",
      url: "https://roselcost.github.io/topsters4",
      gitHub: "https://github.com/Roselcost/topsters4",
      techs: ["React", "Typescript", "Redux", "Next.JS"],
    },
  ];
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    darkTheme
      ? document.getElementsByTagName("html")[0].removeAttribute("dark")
      : document.getElementsByTagName("html")[0].setAttribute("dark", "true");
  };

  const prefersDarkTheme = () => {
    const a =
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return a;
  };

  useEffect(() => {
    if (!prefersDarkTheme()) toggleTheme();
    else document.getElementsByTagName("html")[0].setAttribute("dark", "true");
  }, []);

  const [isParticlesOn, setIsParticlesOn] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <Head>
        <title>Roselcost</title>
        <meta name="description" content="Roselcost website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`animate-opacity ${styles.main}`}>
        <ParticlesJS dark={darkTheme} on={isParticlesOn}></ParticlesJS>

        <div className={styles["particles-button"]}>
          <Button onClick={() => setIsParticlesOn(!isParticlesOn)}>
            {isParticlesOn ? "✨" : "🌟"}
          </Button>
          <Button onClick={() => toggleTheme()}>
            {darkTheme ? "🌙" : "☀️"}
          </Button>
        </div>
        <div className={styles.container}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>
              <h2>Hello!</h2>
            </div>
            <div className={`${styles.section} ${styles.intro}`}>
              <div className={styles.titles}>
                <span
                  onClick={() => {
                    toggleTheme();
                  }}
                  className={styles.linkTitle}
                >
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
                  <h2 className={styles.minititle}>
                    Also known as Roselcost and{" "}
                    <span style={{ fontSize: "12px" }}>ダニーさん</span>
                  </h2>
                  <h2 className={styles.minititle}>From Barcelona</h2>
                </div>
                <div>
                  <h2>Some things I love</h2>
                  <div className={styles.hobbies}>
                    <h2 className={styles.minititle}>🎮 Videogames</h2>
                    <h2 className={styles.minititle}>🏯 Japanese culture</h2>
                    <h2 className={styles.minititle}>🍣 Cook</h2>
                    <h2 className={styles.minititle}>🎸 Play music</h2>
                    <h2 className={styles.minititle}>⛰️ Explore</h2>
                  </div>
                </div>
                <div className={styles.activities}>
                  <h2 className={styles.subtitle}>
                    <a target="_blank" href="https://github.com/roselcost">
                      💻 My code
                    </a>
                  </h2>
                  <h2 className={styles.subtitle}>
                    <a
                      target="_blank"
                      href="https://elrascacielosdeshinjuku.substack.com"
                    >
                      🪶 My articles
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>
              <h2>Projects</h2>
            </div>
            <div className={`${styles.section} ${styles["projects-section"]}`}>
              <div className={styles.projects}>
                {projects.map((project) => (
                  <Project
                    project={project}
                    dark={darkTheme}
                    key={project.title}
                  ></Project>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
