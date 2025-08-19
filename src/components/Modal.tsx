import styles from "@/styles/Modal.module.scss";
import Image from "next/image";
import Button from "./Button";
import Card from "./Card";
import { ProjectType } from "@/resources/Project.type";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Modal(props: {
  onclose: () => void;
  dark: boolean;
  project: ProjectType;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        props.onclose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.onclose]);
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      key={props.project.title}
    >
      <motion.div
        onClick={() => props.onclose()}
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div onClick={() => props.onclose()} className={styles.close}>
          <span>X</span>
        </div>
        <Card title={props.project.title}>
          <div className={styles.project}>
            <div className={styles.left}>
              <Image
                className={styles.image}
                src={"/sora/" + props.project.image}
                alt="Project image"
                width={500}
                height={0}
                priority
              />
            </div>
            <div className={styles.right}>
              <div className={styles.description}>
                {props.project.description.split("\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <div className={styles.techs}>
                  {props.project.techs.map((tech: string) => {
                    return (
                      <div key={tech}>
                        <div className={styles.tech}>
                          <Image
                            style={{
                              transition: "0.5s ease",
                              filter:
                                props.dark && tech === "NextJS"
                                  ? "invert(1)"
                                  : "invert(0)",
                            }}
                            alt={tech}
                            width={15}
                            height={15}
                            src={`/sora/${tech}.svg`}
                            priority
                          />
                          <span>{tech}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.buttons}>
                <Button
                  type="normal"
                  onClick={() => {
                    window.open(props.project.gitHub);
                  }}
                >
                  <Image
                    style={{
                      transition: "0.5s ease",
                      filter: props.dark ? "invert(1)" : "invert(0)",
                    }}
                    alt="Github"
                    width={20}
                    height={20}
                    src="/sora/GitHub.svg"
                    priority
                  />
                  GitHub repo
                </Button>
                <Button
                  type="normal"
                  onClick={() => {
                    window.open(props.project.url);
                  }}
                >
                  🚀 Try it!
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
