const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
    //console.log(height)
   const results = document.querySelector('#results')

   if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
   }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
    }
    else {
        const ans = (weight/((height*height)/10000)).toFixed(2);
        console.log(ans)

        results.innerHTML = `Your Body Mass Index is: ${ans}`
        if(ans < 18.5) verdict.innerHTML = `You are underweight`
        else if(ans > 18.5 && ans < 25) verdict.innerHTML = `You are healthy and fit`
        else verdict.innerHTML = `You are overweight`
    }
});