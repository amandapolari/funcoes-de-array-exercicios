// Minha Array:
const minhaArray = [1, 2, 3, 4, 5, 6, 7, 8];

// 1)
const multiplicaPor5 = minhaArray.map((item) => {
    const quintuplos = item * 5;
    return quintuplos;
});
console.log(multiplicaPor5);

// 2)
const dividePor2 = minhaArray.map((item) => {
    const metades = item / 2;
    return metades;
});
console.log(dividePor2);
