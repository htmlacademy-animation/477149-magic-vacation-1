import SceneSeaCalf from "./winScene/scene-sea-calf";
import SceneCrocodile from "./loseScene/scene-crocodile";

export const runWinScene = () => new SceneSeaCalf();
export const runLoseScene = () => new SceneCrocodile();
