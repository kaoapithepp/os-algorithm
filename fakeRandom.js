fakeRandom = [];

for(let i = 0; i < 100 ; i++){
    fakeRandom.push(Math.floor(Math.random() * (9 - 0) + 0));
}

console.log(fakeRandom);
console.log(`length : ${fakeRandom.length}`);