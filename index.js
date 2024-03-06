// Code your solution here

function findMatching(arrayOfDrivers, driverName) {
    const foundDrivers = arrayOfDrivers.filter((driver) => {
       return driver.toLowerCase() === driverName.toLowerCase()
    })

    return foundDrivers
}

function fuzzyMatch(arrayOfDrivers, input){
    const matchingFirstLetters = arrayOfDrivers.filter((driver) => {
        return driver.slice(0, input.length) === input
    })

    return matchingFirstLetters
}

function matchName(arrayOfDrivers, driverName) {
    const matchingNames = arrayOfDrivers.filter((driver) => {
        return driver.name === driverName
    })

    return matchingNames
}
