let num = [5, 8, 9, 3]
num[4] = 7
num.push(2)
num.sort()
console.log(num)

for(i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for(let i in num){      //Para cada posição na variável "num", eu vou mostrar o num[i], só funciona pra array e objects
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

num.indexOf(3)