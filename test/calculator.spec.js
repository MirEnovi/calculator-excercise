const {
  sum,
  substract,
  multiply,
  divide
} = require('../src/calculator.js');

describe('Suma', () => {
  test('Retorna el resultado de 1 + 3', () => {
    expect(sum(1, 3)).toBe(4);
  });
  test('Retornar el mismo valor si solo un valor es ingresado', () => {
    expect(sum(1)).toBe(1);
  });
  test('Retorna error si se ingresa una letra', () => {
    expect(sum('a', 2)).toBe('error');
  });
  test('Retorna error si se ingresa una letra', () => {
    expect(sum(3, 'c')).toBe('error');
  });
  test('retorna error sin no se ingresa ningun valor', () => {
    expect(sum()).toBe('error');
  });
});


describe('Resta', () => {
  test('Retorna el resultado de 4 - 3 debe dar 1', () => {
    expect(substract(4, 3)).toBe(1);
  });
  test('Retorna el resultado de -4 - 3 debe de dar -7', () => {
    expect(substract(-4, 3)).toBe(-7);
  });
  test('Retornar el mismo valor si solo un valor es ingresado', () => {
    expect(substract(1)).toBe(1);
  });
  test('Retorna error si se ingresa una letra', () => {
    expect(substract('a', 2)).toBe('error');
  });
  test('Retorna error si se ingresa una letra', () => {
    expect(substract('d', 'c')).toBe('error');
  });
  test('retorna error sin no se ingresa ningun valor', () => {
    expect(substract()).toBe('error');
  });
});

describe('Multiplicación', () => {
  test('Retorna el resultado de 6 * 3 debe dar 18', () => {
    expect(multiply(6, 3)).toBe(18);
  });
  test('Retornar el mismo valor si solo un valor es ingresado', () => {
    expect(multiply(1)).toBe(1);
  });
  test('Retorna error si se ingresa una letra', () => {
    expect(multiply('a', 2)).toBe('error');
  });
  test('Retorna error si se ingresa una letra', () => {
    expect(multiply('d', 'c')).toBe('error');
  });
  test('retorna error sin no se ingresa ningun valor', () => {
    expect(multiply()).toBe('error');
  });
});

describe('Divición', () => {
  test('Retorna el resultado de 4/2 debe dar 2', () => {
    expect(divide(4, 2)).toBe(2);
  });
  test('Retornar el mismo valor si solo un valor es ingresado', () => {
    expect(divide(1)).toBe(1);
  });
  test('Retorna error si se ingresa una letra', () => {
    expect(divide('a', 2)).toBe('error');
  });
  test('Retorna error si se ingresa solo letras', () => {
    expect(divide('d', 'c')).toBe('error');
  });
  test('retorna error sin no se ingresa ningun valor', () => {
    expect(divide()).toBe('error');
  });
});