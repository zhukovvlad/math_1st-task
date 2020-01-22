import { Magician, Daemon, Undead } from '../createCharacter';

test.each([
  ['Magician. stoned off. distance = 2', 'off', 2, 9],
  ['Magician. stoned on. distance = 2', 'on', 2, 9.5],
])(
  ('should calculate %s'),
  (userCase, mode, distance, expected) => {
    const mag = new Magician('Willie');
    mag.stoned = mode;
    mag.toAttack = distance;
    const result = mag.toAttack;

    expect(result).toBe(expected);
  },
);

test.each([
  ['Daemon. stoned off. distance = 2', 'off', 2, 9],
  ['Daemon. stoned on. distance = 2', 'on', 2, 9.5],
])(
  ('should calculate %s'),
  (userCase, mode, distance, expected) => {
    const mag = new Daemon('Willie');
    mag.stoned = mode;
    mag.toAttack = distance;
    const result = mag.toAttack;

    expect(result).toBe(expected);
  },
);

test.each([
  ['Undead. stoned off. distance = 2', 'off', 2, 25],
  ['Undead. stoned on. distance = 2', 'on', 2, 25],
])(
  ('should calculate %s'),
  (userCase, mode, distance, expected) => {
    const mag = new Undead('Willie');
    mag.stoned = mode;
    mag.toAttack = distance;
    const result = mag.toAttack;

    expect(result).toBe(expected);
  },
);

test.each([
  ['Daemon. stoned off. distance = 7', 'off', 7, 'Distance should be positive and less or equal 5'],
  ['Daemon. stoned on. distance = -5', 'on', -5, 'Distance should be positive and less or equal 5'],
])(
  ('should calculate %s'),
  (userCase, mode, distance, expected) => {
    const mag = new Daemon('Willie');
    mag.stoned = mode;
    const result = () => {
      mag.toAttack = distance;
    };

    expect(result).toThrow(expected);
  },
);
