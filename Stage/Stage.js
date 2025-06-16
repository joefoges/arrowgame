/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,        // or Project, Trigger, Costume, etc.
  Trigger,
  Costume
} from "https://unpkg.com/leopard@1.6.1/dist/index.esm.js";

// [plus any other local imports in the same folder]


export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
