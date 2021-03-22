module.exports = {
    hofstaderFemale: function (n) {
        if (n < 0){
            return 0;
        } else{
            if (n == 0){
                return 1;
            }else {
                return (n - this.hofstaderFemale(n - 1));
            }
        }
    },

    hofstaderMale: function (n) {
        if (n < 0) {
            return 0;
        } else {
            if(n == 0){
                return 0; 
            }else{ 
                return n - this.hofstaderMale(n - 1);
            }
        }
    },

    ackermann: function (m, n) {
        if(m === 0){
            return (n + 1);
        }else if (m > 0 && n===0){
            return this.ackermann(m - 1, 1);
        }else{
            return this.ackermann(m - 1, this.ackermann(m, n - 1));
        }
    },

    potencia: function (base, exp) {
        switch (exp) {
            case 0:
                return 1;
            default:
                return base * this.potencia(base, exp - 1);
        }
    },

    ordenarPorBurbuja: function (arreglo) {
        var tempArray = arreglo;
        var volverAOrdenar = false;

        tempArray.forEach(function (valor, key) {
            // Comprueba si el primero es mayor que el segundo y no esta en la última posición
            if (tempArray[key] > tempArray[key + 1] && tempArray.length - 1 != key) {
                // Intercambia la primera posición por la segunda
                var primerNum = tempArray[key];
                var segundoNum = tempArray[key + 1];
                tempArray[key] = segundoNum;
                tempArray[key + 1] = primerNum;
                // Si debe volver a ordenarlo
                volverAOrdenar = true;
            }
        });
        // Vuelve a llamar al función
        if (volverAOrdenar) {
            this.ordenarPorBurbuja(tempArray);
        }
        // Array ordenado
        return tempArray;
    },


}