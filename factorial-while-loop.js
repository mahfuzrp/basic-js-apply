

// --------Factorial While Loop------Concept--------------

function factorial(n)
{
    let fact = 1;
    let i=1;
    while(i<=n)
    {
        fact = fact * i;
        i++;
    }
    return fact;
}

let calculate = factorial(7);
console.log(calculate);


