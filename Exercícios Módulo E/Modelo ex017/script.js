function gerar(){
    let number = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (number.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        let n = Number(number.value)
        let c=1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
        
}