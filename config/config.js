/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 12
			}
		},
		{
			module: "calendar_monthly",
			header: "Calendar",
			position: "top_left",
		},
		{
			module: "MMM-CyanideHappiness",
			position: "top_left",
			config: {
				updateInterval: 36000000,
				color: true
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},

		{
			module: "currentweather",
			position: "top_right",
			config: {
				locationID: "4273837",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				units: 'imperial',
				timeFormat: 12,
				showHumidity: true,
				showFeelsLike: true,
				appid: "6a031b69107d56e63659d0434205a957"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				locationID: "4273837",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				units: 'imperial',
				appid: "6a031b69107d56e63659d0434205a957"
			}
		},
		{
			module: 'MMM-NHL',
			position: 'top_right',
			config: {
				focus_on: ['STL']
			}
		},
		{
			module: "MMM-DailyBibleVerse",
			position: "bottom_bar",
			config: {
				version: 'NLT',
				size: 'small'
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
