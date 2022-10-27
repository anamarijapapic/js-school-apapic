let year = parseInt(prompt("Unesite godinu", "0"));

if (! (year % 400) || ! (year % 4) && year % 100 ) {
    console.log("Godina " + year + ". je prijestupna.");
}
else {
    console.log("Godina " + year + ". nije prijestupna.");
}