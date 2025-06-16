/* Arrow1.js — projectile that launches from AppleCatcher and flies forward */

import {
  Sprite,
  Trigger,
  Costume
} from "https://unpkg.com/leopard@1.12.0/dist/index.esm.js";


export default class Arrow1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "arrow",
        "./Arrow1/costumes/arrow.svg",   // <-- make sure this file exists
        { x: 0, y: 0 }
      )
    ];

    /* 1️⃣  Space bar => create a clone */
    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "space" }, this.fireArrow),
      /* 2️⃣  Each clone runs the generator below */
      new Trigger(Trigger.CLONE_START, this.cloneBehavior)
    ];
  }

  /* Template sprite stays hidden; it just spawns clones */
  fireArrow() {
    const shooter = this.sprites["AppleCatcher"];      // ← your launcher
    if (shooter) {
      this.goto(shooter.x, shooter.y);                  // start at launcher
      this.direction = shooter.direction;               // point same way
    }
    this.visible = false;                               // hide template
    this.createClone();
  }

  /* Generator fn ⇒ runs one frame per `yield` */
  *cloneBehavior() {
    this.visible = true;
    while (!this.touching("edge")) {
      this.move(12);   // speed; tweak to taste
      yield;           // wait 1 frame
    }
    this.deleteThisClone();
  }
}
