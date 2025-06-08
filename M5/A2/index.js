var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function livros(usuario) {
    var livros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        livros[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < livros.length; i++) {
        console.log("".concat(usuario, " - ").concat(livros[i]));
    }
}
livros("Roger", "ss", "sss", "ssss");
//pega o número maior do arrau usando o spread
var num = [2, 3, 4, 5, 6, 7, 8];
var maior = Math.max.apply(Math, num);
console.log(maior);
var pessoa = { nomePessoa: "Roger", idade: 19 };
var pessoa2 = __assign({}, pessoa);
console.log(pessoa2);
var nomePessoa = pessoa.nomePessoa, idade = pessoa.idade; //desistruturando objeto sem rest, comum
var a = [1, 2];
var b = [3, 4];
var c = __spreadArray(__spreadArray([], a, true), b, true);
var primeiro = c[0], segundo = c[1], terceiro = c[2], restante = c.slice(3); //sem o spread, teria que colocar até um infinito no array
console.log.apply(//sem o spread, teria que colocar até um infinito no array
console, __spreadArray([primeiro, segundo, terceiro], restante, false));
console.log(c);
