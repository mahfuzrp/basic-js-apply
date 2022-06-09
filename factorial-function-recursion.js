

// --------Factorial recursion------Concept--------------

function factorial(n)
{
    if(n<=1)
    {
        if(n==0){
            return 0;
        }

        else if(n==1){
            return 1;
        }

        else{
            return -1;
        }
    }
    else{
        return n*factorial(n-1);
    }
}

let calculate = factorial(7);
console.log(calculate);


