const transformFunkoNameToKey = (funkoName) => funkoName.toUpperCase().replace(/ /g, "_");

module.exports = { transformFunkoNameToKey }