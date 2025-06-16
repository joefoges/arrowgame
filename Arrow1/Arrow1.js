import { Sprite, Trigger, Script, Costume } from "leopard";

export default class Arrow1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow", "./Arrow1/costumes/arrow.svg", { x: 0, y: 0 })
    ];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "space" }, this.handleShoot),
      new Trigger(Trigger.CLONE_START, this.whenCloneStarts)
    ];
  }

  handleShoot() {
    this.createClone();
  }

  *whenCloneStarts() {
    this.visible = true;

    // Start where the shooter is (adjust this as needed)
    this.goto(this.sprites["AppleCatcher"].x, this.sprites["AppleCatcher"].y);
    this.direction = this.sprites["AppleCatcher"].direction;

    // Fly until off-screen
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }

    this.deleteThisClone();
  }
}
