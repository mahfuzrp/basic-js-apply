// --------Fibonacci Series Function------Concept--------------
/*function fibonacci(n)
{
    let fibo = [0,1];
    for(let i=2; i<=n; i++)
    {
        fibo[i] = fibo[i-1] + fibo[i-2];
        console.log(fibo[i], fibo[i-1], fibo[i-2]);
    }
    return fibo;
}

let calculate = fibonacci(11);
console.log(calculate);
*/




// --------Fibonacci Recursive Function------Concept--------------
/*
function fibonacci(n)
{
    if(n==0)
    {
        return 0;
    }
    if(n==1)
    {
        return 1;
    }
    else
    {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

let result = fibonacci(11);

console.log(result);
*/




// --------Fibonacci Recursive Function------Concept--------------
function fibonacci(n)
{
    if(n==0)
    {
        return [0];
    }
    else if(n==1)
    {
        return [0, 1];
    }
    else{
        //Calculate Array nth Element
        let fibo = fibonacci(n-1);
        let nextElement = fibo[n-1] + [n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

let result = fibonacci(11);
console.log(recived);


