const check = (betNumber) => {
let random = Math.floor(Math.random() * (5) + 1); 
return betNumber === random; }

const result = (check) => { 
return check ? "Parabéns você ganhou" : "Tente novamente"
}

console.log(result(check(2)))