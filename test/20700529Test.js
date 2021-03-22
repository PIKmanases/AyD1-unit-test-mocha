const assert = require('chai').assert;
const app = require('../201700529');

describe('201700529', function(){
  describe('Ackerman', function(){
    it('Prueba retorna 509', function(){
      assert.equal(app.ackermann(3, 6), 509);
    });
  });

  describe('HofstaterFemale', function(){
    it('Prueba retorna 620', function(){
      assert.equal(app.hofstaderFemale(1238), 620);
    });

    it('Prueba retorna 862', function(){
        assert.equal(app.hofstaderFemale(1725), 862);
      });
  });

  describe('HofstaterMale', function(){
    it('Prueba retorna 619', function(){
      assert.equal(app.hofstaderMale(1238), 619);
    });

    it('Prueba retorna 863', function(){
        assert.equal(app.hofstaderMale(1725), 863);
      });
  });

  describe('Potencia', function(){
    it('5 ** 4 = 625', function(){
      assert.equal(app.potencia(5, 4), 625);
    });
  });

  describe('Ordenamiento por Burbuja', function(){
    let arreglo = [11, 6, 5, 1, 12, 14, 118, 2, 3];
    it('Devuelve un arreglo', function(){
      assert.isArray(app.ordenarPorBurbuja(arreglo));
    });
    let arregloOrdenado = [1, 2, 3, 5, 6, 11, 12, 14, 118];
    it('Arreglo ordenado', function(){
       assert.deepEqual(app.ordenarPorBurbuja(arreglo), arregloOrdenado);
       assert.c
    });
  });
  
});
