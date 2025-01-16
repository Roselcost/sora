import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Project from "@/components/Project";
import ParticlesJS from "@/components/ParticlesJS";
import { useEffect, useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const projects = [
    {
      title: "Shin Kiwami",
      icon: "🐉",
      image: "shinkiwami.jpg",
      url: "https://roselcost.github.io/shinkiwami/",
      gitHub: "https://github.com/Roselcost/shinkiwami",
      techs: ["React", "TypeScript", "Redux"],
    },
    {
      title: "Mario Kart Tracker",
      icon: "🏁",
      image: "mariokarttracker.jpg",
      url: "https://roselcost.github.io/mariokarttracker/",
      gitHub: "https://github.com/Roselcost/mariokarttracker",
      techs: ["React", "TypeScript", "Redux"],
    },
    {
      title: "Topsters 4",
      icon: "🥇",
      image: "topsters.jpg",
      url: "https://topsters4.vercel.app",
      gitHub: "https://github.com/Roselcost/topsters",
      techs: ["React", "TypeScript", "Redux", "NextJS"],
    },
    {
      title: "Kingdom Hearts IV",
      icon: "🩵",
      image: "kingdomheartsiv.jpg",
      url: "https://roselcost.github.io/kingdomheartsiv/",
      gitHub: "https://github.com/Roselcost/kingdomheartsiv",
      techs: ["React", "TypeScript"],
    },
    {
      title: "Codename Cafe",
      icon: "☕️",
      image: "codenamecafe.jpg",
      url: "https://roselcost.github.io/CodenameCafe/",
      gitHub: "https://github.com/Roselcost/CodenameCafe",
      techs: ["Angular", "TypeScript", "Redux"],
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
        <link rel="icon" href="/sora/favicon.png" />
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
                  <h2 className={styles.minititle}>Also known as Ross</h2>
                  <h2 className={styles.minititle}>
                    Frontend Developer from Barcelona
                  </h2>
                </div>
                <div>
                  <h2>Some things I love</h2>
                  <div className={styles.hobbies}>
                    <div className={styles["hobbies-row"]}>
                      <h2 className={styles.minititle}>🎮 Videogames</h2>
                      <h2 className={styles.minititle}>🏯 Japanese culture</h2>
                    </div>
                    <div className={styles["hobbies-row"]}>
                      <h2 className={styles.minititle}>🍣 Cooking</h2>
                      <h2 className={styles.minititle}>🎸 Music</h2>
                      <h2 className={styles.minititle}>⛰️ Exploring</h2>
                    </div>
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
