import "./App.scss";
import {
  ReleaseCard,
  type Release,
} from "./components/release-card/release-card";
import { getClassName } from "./utilities/class-helpers";
const testRelease = {
  title: "Test Title",
  artist: "Test Artist",
  imgUrl:
    "https://randomaverage.com/wp/wp-content/uploads/2018/10/firegoose1.jpg",
};
const releases: Release[] = [
  testRelease,
  testRelease,
  testRelease,
  testRelease,
  testRelease,
  testRelease,
  testRelease,
];

const App = () => {
  const ROOT_CLASS = "app-home";
  return (
    <div className={ROOT_CLASS}>
      <img src="/emblem.png" className={getClassName(ROOT_CLASS, "logo")} />
      <div className={getClassName(ROOT_CLASS, "release-grid")}>
        {releases.map((release) => ReleaseCard(release))}
      </div>
    </div>
  );
};

export default App;
