function population(country, pop) {
	return {
		country: country,
        pop: pop, 
        toString: function () {
			return "[Population " + 
				"\"" + country + "\" " +
				pop +
			"]";
        },
        valueOf: function () {
			return pop;
		},
	};
}

var america_pop = population("USA", 350e6);
var mexico_pop = population("Mexico", 200e6);
var canada_pop = population("Canada", 200e6);

console.log(america_pop); // [object Object]

var north_america_pop = america_pop + mexico_pop + canada_pop;

console.log(north_america_pop);