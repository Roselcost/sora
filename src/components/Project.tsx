import styles from "@/styles/Project.module.scss";
import Image from "next/image";
import { ProjectType } from "../resources/Project.type";

export default function Project(props: {
  onClick: () => void;
  project: ProjectType;
}) {
  return (
    <div onClick={props.onClick} className={styles.project}>
      <h3>
        {props.project.icon} {props.project.title}
      </h3>
      <div className={styles["project__image-container"]}>
        <div className={styles["project__image-content"]}>
          <Image
            className={styles["project__image"]}
            src={"/sora/" + props.project.image}
            alt="Project image"
            width={250}
            height={0}
            priority
          />
        </div>
        <div className={styles["project__icon-container"]}>
          <span className={styles["project__icon"]}>{props.project.icon}</span>
        </div>
      </div>
    </div>
  );
}
