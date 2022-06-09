

// -----------Leap Year Check-------

function isLeapYear(year)
{
    if(year%4==0 && year%100 !=0 || year%400==0)
    {
        console.log(`${year} year is an leap year.`);
    }
    else{
        console.log(`${year} year is not an leap year.`);
    }
}

// ------Take Input--------
//      let year = parseInt(prompt("Enter a year : "));
//      isLeapYear(year);

isLeapYear(2100);



