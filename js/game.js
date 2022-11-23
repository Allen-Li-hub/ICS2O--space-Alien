/* global Phaser */

// Copyright (c) 2022 Allen Li
//
// Created by: Allen Li
// Created on: Nov 2022
// This is the Phaser3 game configuration file

/**
 * scene import statements
 */

import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";

const splashScene = new SplashScene();
const titleScene = new TitleScene();

const config = {
  type: Phaser.ATUO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },

  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);

game.scene.start("splashScene");
