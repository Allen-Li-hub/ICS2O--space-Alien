/* global Phaser */

// Copyright (c) 2022 Allen Li
//
// Created by: Allen Li
// Created on: Nov 2022
// This is the Phaser3 game configuration file

/**
 * This class is the Game Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the construtor
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Game Scene")

    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }

  /**
   * This method is called once per game step while the scene is running.
   *  @param {number} time - The current time.
   *  @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const KeyRightObj = this.input.keyboard.addKey("RIGHT")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    if (KeyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
  }
  
}

export default GameScene
