/* global Phaser */

// Copyright (c) 2022 Allen Li
//
// Created by: Allen Li
// Created on: Nov 2022

/**
 * This class it the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });

    this.titleSceneBackgroundImage = null;
    this.titleSceneText = null;
    this.titleSceneTextStyle = {
      font: "200px times",
      fill: "#fde4b9",
      align: "center",
    };
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ff0000");
  }

  preload() {
    console.log("Title Scene");
    this.preload.image(
      "titleSceneBackground",
      "assets/aliens_screen_iamge.jpg"
    );
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75);
    this.titleSceneBackgroundImage.x = 1920 / 2;
    this.titleSceneBackgroundImage.y = 1080 / 2;

    this.titleSceneText = this.add.text(
      1920 / 2,
      1080 / 2 + 350,
      "Space Alien",
      this.titleSceneTextStyle
    );
  }

  /**
   * This method is called once per game step while the scene is running.
   *  @param {number} time - The current time.
   *  @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene;
