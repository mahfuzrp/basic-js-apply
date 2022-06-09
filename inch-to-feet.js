

// -----------Inch-to-feet-------
function inchToFeet(inch)
{
    let convert = inch / 12;
    convert = parseFloat((convert).toFixed(1));
    return convert;
}

let result = inchToFeet(35);
console.log(result);

