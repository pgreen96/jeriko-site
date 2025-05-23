import { getClassName } from "../../utilities/class-helpers";
import "./styles.scss";
export type Release = {
  title: string;
  artist: string;
  imgUrl: string;
};
const ROOT_CLASS = "release-card";
export const ReleaseCard = (props: Release) => {
  return (
    <div
      className={ROOT_CLASS}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    >
      <div className={getClassName(ROOT_CLASS, "glass-overlay")}>
        <span>{props.title}</span>
        <span>{props.artist}</span>
        <button className={getClassName(ROOT_CLASS, "download-button")}>
            <img src="/dl-icon.svg"/> Download</button>
      </div>
    </div>
  );
};
