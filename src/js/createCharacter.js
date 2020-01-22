/* eslint-disable max-classes-per-file */
export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.isStoned = 0;
    //  this.initAttack = this.attack;
  }

  set stoned(value) {
    if (value === 'on' && (this.type === 'Magician' || this.type === 'Daemon')) {
      this.isStoned = 1;
    }
  }

  set toAttack(distance) {
    if (distance > 5 || distance <= 0) throw new Error('Distance should be positive and less or equal 5');
    if (this.isStoned === 0 && (this.type === 'Magician' || this.type === 'Daemon')) {
      this.attack = this.attack * (1 - (distance - 1) * 0.1);
    }
    if (this.isStoned === 1 && (this.type === 'Magician' || this.type === 'Daemon')) {
      this.attack = Math.round(this.attack * (1 - Math.log2(distance) * 0.05) * 100) / 100;
    }
  }

  get toAttack() {
    return this.attack;
  }
}

export class Magician extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Daemon extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
