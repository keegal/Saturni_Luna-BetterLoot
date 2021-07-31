exports.mod = (mod_info) => {
	this.locationloot = global._database.gameplayConfig.locationloot;
	let locationNames = ["bigmap","factory4_day","factory4_night","interchange","laboratory","rezervbase","shoreline","woods"]
	let config = require("../config.json");

	for(let locationName of locationNames){
		let newValue = config[locationName]
		logger.logInfo(`setting ${locationName} to ${newValue}`)
		this.locationloot[locationName] = newValue			
	}
	location_f.handler.generate = require("./location").handler.generate;
	logger.logSuccess("[MOD] Better Loot by Saturni Luna Applied");
}