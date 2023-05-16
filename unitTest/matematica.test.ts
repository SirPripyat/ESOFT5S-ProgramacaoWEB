import { type } from 'os';
import Matematica from '../src/matematica/matematica';
import { ErrorMessages } from "../src/matematica/matematica.enum";

describe('Validação da string', () => {
  test('Deve retornar um erro ao atribuir uma string em A e em B', () => {
    const matematica = new Matematica();

    // @ts-ignore
    expect(matematica.setA('oi')).toBe(ErrorMessages.INVALID_INPUT);

    // @ts-ignore
    expect(matematica.setB('oi')).toBe(ErrorMessages.INVALID_INPUT);

  })
})

describe('Função de Soma: ', () => {
  test('Deve-se somar dois números', () => {
    const matematica = new Matematica();

    matematica.setA(10);
    matematica.setB(20);

    expect(matematica.getSum()).toBe(30);
  });
})

describe('Função de Subtração: ', () => {
  test('Deve-se subtrair dois números', () => {
    const matematica = new Matematica();

    matematica.setA(20);
    matematica.setB(10);

    expect(matematica.getMinus()).toBe(10);
  });
})

describe('Função de Multiplicação: ', () => {
  test('Deve-se multiplicar dois números', () => {
    const matematica = new Matematica();

    matematica.setA(20);
    matematica.setB(10);

    expect(matematica.getMultiplication()).toBe(200);
  });
})

describe('Função de Divisão: ', () => {
  test('Deve-se dividir dois números', () => {
    const matematica = new Matematica();

    matematica.setA(20);
    matematica.setB(10);

    expect(matematica.getDivision()).toBe(2);
  });
})



