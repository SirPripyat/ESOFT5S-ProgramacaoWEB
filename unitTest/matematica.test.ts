import { type } from 'os';
import Matematica from '../src/matematica/matematica';

test('adds 1 + 2 to equal 3', () => {
  const matematica = new Matematica();

  matematica.setA(1)
  matematica.setB(2);

  expect(matematica.getSum()).toBe(3);
  expect(matematica.getMinus()).toBe(-1);
  
});