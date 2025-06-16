import { Sprite, Trigger, Script, Costume, Sound } from "leopard";

export default class Arrow1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [new Costume("arrow", "./Arrow1/costumes/arrow.svg", { x: 0, y: 0 })];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "space" }, this.shootArrow),
      new Trigger(Trigger.CLONE_START, this.flyArrow)
    ];
  }

  shootArrow() {
    this.createClone();
  }

  flyArrow() {
    this.goto(this.stage.vars.launcherX, this.stage.vars.launcherY); // Adjust if needed
    this.visible = true;
    while (!this.touching("edge")) {
      this.move(10);
      this.yield();
    }
    this.deleteThisClone();
  }
}
