import Button from "@/components/Button";
import styles from "@/styles/Project.module.css";
import Image from "next/image";

export default function Project(props: {
  project: {
    title: string;
    icon: string;
    image: string;
    url: string;
    gitHub: string;
    techs: string[];
  };
  dark: boolean;
}) {
  return (
    <>
      <div className={styles.project}>
        <div className={styles["project-title"]}>
          <h3>{props.project.icon} {props.project.title}</h3>
        </div>
        <div className={styles["image-container"]}>
          <div className={styles["image-content"]}>
            <Image
              className={styles.image}
              src={"/" + props.project.image}
              alt="Project image"
              width={250}
              height={0}
              priority
            />
          </div>
          <div className={styles.icon}>{props.project.icon}</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.techs}>
            {props.project.techs.map((tech) => {
              return (
                <div key={tech} className={styles.tech}>
                  <div
                    style={
                      props.dark && tech === "Next.JS"
                        ? { filter: "invert(1)" }
                        : {}
                    }
                  >
                    <Image
                      alt={tech}
                      width={15}
                      height={15}
                      src={`${tech}.svg`}
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                window.open(props.project.gitHub);
              }}
            >
              <div style={props.dark ? { filter: "invert(1)" } : {}}>
                <Image
                  alt="Github"
                  width={20}
                  height={20}
                  src="GitHub.svg"
                  priority
                />
              </div>
            </Button>
            <Button
              onClick={() => {
                window.open(props.project.url);
              }}
            >
              🌍
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
