const btn = document.getElementById('btnVisible')
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const InputEmpty = document.querySelector('.numberType')
    if(InputEmpty.value === ''){
        const getError = document.querySelector('.ApperError')
        getError.style.display = 'block'
        const ValueGetRezult = document.getElementById("visible")
        ValueGetRezult.style.display = 'none'
        setTimeout(() => {
            getError.style.display = 'none'
        }, 5000)
    }else if(InputEmpty.value != ''){
        e.preventDefault()
        const getError = document.querySelector('.ApperError')
        getError.style.display = 'none'
        const RezultSum = document.getElementById('visible')
        RezultSum.style.display = 'block' 
        const from = document.querySelector('.FromCountry');
        const fromValue = from.value;
        console.log(fromValue);
        const to = document.querySelector('.ToCountry');
        const toValue = to.value;
        console.log(toValue)
        const getAmount = InputEmpty.value;
        console.log(getAmount)
        
        const url = `https://api.frankfurter.app/latest?amount=${getAmount}&from=${fromValue}&to=${toValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => {

           let number = Object.values(data.rates)[0];
           console.log(number)
           let f = new Intl.NumberFormat('en-us')
          
            const SendSum = document.querySelector(".SendSum")
            SendSum.innerHTML = `
            ${InputEmpty.value} ${fromValue} = ${f.format(number)} 
            `;
        })
    }
})
/*

*/