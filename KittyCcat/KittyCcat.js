/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,        // or Project, Trigger, Costume, etc.
  Trigger,
  Costume
} from "https://unpkg.com/leopard@1.6.1/dist/index.esm.js";

// [plus any other local imports in the same folder]


export default class KittyCcat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./KittyCcat/costumes/costume1.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271,
      }),
      new Costume("costume2", "./KittyCcat/costumes/costume2.svg", {
        x: 46,
        y: 53,
      }),
    ];

    this.sounds = [new Sound("Meow", "./KittyCcat/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-190, 0);
  }
}
