(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?



     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
// Part one
    let brReplace = planetsString.replaceAll("|","<br>");
    console.log(brReplace);


    // Bonus




    let newArray = planetsString.split("|")

for (let planet of newArray) {
    newArray = ("<li>" + planet + "</li>");

    console.log(typeof newArray);


}
    console.log(newArray);
    newArray.unshift('<ul>');
    newArray.push('</ul>');















})();
