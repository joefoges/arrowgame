/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,        // or Project, Trigger, Costume, etc.
  Trigger,
  Costume
} from "https://unpkg.com/leopard@1.6.1/dist/index.esm.js";

// [plus any other local imports in the same folder]


export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 }),
    ];

    this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];

    this.triggers = [];
  }
}
