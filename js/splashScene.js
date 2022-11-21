/* global Phaser */

// Copyright (c) 2022 Allen Li
//
// Created by: Allen Li
// Created on: Nov 2022

/**
 * This class is the Splash Scene.
 */

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("800080");
  }

  preload() {
    console.log("Splash Scene");
  }

  /**
   * can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */

  create(data) {
    //pass
  }

  /**
   * Should be overridden by your own Scenes.
   * this method is called once per game step while the scene is running.
   *  @param {number} time - The current time.
   *  @param {number} delta - The delta time in ms since the last time.
   */
  update(time, delta) {
    this.scene.switch("titleScene");
  }
}

export default SplashScene;
