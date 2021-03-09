import sortHealthLevel from '../app';

describe('sortHealthLevel', () => {
  const received = sortHealthLevel([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  test('should sort the array correctly', () => {
    expect(received).toEqual(expected);
  });

  test('should NOT sort the array with .toBe', () => {
    expect(received).not.toBe(expected);
  });
});
