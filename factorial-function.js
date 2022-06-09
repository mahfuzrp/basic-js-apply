

// --------Factorial Function------Concept--------------

function factorial(n)
{
    let fact = 1;
    for(let i=1; i<=n; i++)
    {
        fact = fact*i;
    }
    return fact;
}

let result = factorial(7);
console.log(result);


