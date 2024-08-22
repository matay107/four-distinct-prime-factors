var loopCount = 0; // Initialize loop counter
var costCPUtime = 0;
const factorsCache = new Map();
let primeArray = [2];
let maxPrime = 2;

function findPrimeFactors(num) {
	if (factorsCache.has(num)) return factorsCache.get(num);

	let factor = [];
	let testValue = num;
	let pointer = 0;

	while (true) {
		loopCount++;

		if (factorsCache[testValue]) {
			factor = [...factor, ...factorsCache[testValue]];
			break;
		}

		if (testValue % primeArray[pointer] === 0) {
			testValue = testValue / primeArray[pointer];
			factor.push(primeArray[pointer]);
		}

		if (testValue === 1) break;

		if (primeArray[pointer] ** 2 > testValue) {
			if (testValue > maxPrime) {
				maxPrime = testValue;
				primeArray.push(testValue);
			}

			factor.push(testValue);
			break;
		}
		pointer++;
	}
	const temp = [...new Set(factor)];
	factorsCache.set(num, temp);
	return temp;
}

function findFirstOfFourConsecutive() {
	const consecutive = 4;
	let arrResult = [];
	let testValue = 2;

	while (arrResult.length < consecutive) {
		loopCount++;
		let factor = findPrimeFactors(testValue);
		if (factor.length !== consecutive) {
			arrResult = [];
			testValue = testValue + consecutive;
			continue;
		}
		arrResult.push(testValue);
		testValue--;
	}
	return arrResult;
}

function calculateAWSCost(timeTaken) {
	const hourlyRate = 0.12; // r6i.large (2 vCPUs, 16 GB RAM): Around $0.12 per hour.
	const secondsInHour = 3600;
	const millisecondsToSeconds = 1000;
	return (hourlyRate / secondsInHour) * (timeTaken / millisecondsToSeconds);
}

function main() {
	const start = performance.now();
	const result = findFirstOfFourConsecutive();
	const timeTaken = performance.now() - start;

	costCPUtime = calculateAWSCost(timeTaken);
	console.log("Output solution 3: " + Math.min(...result));
	console.log("Total time taken: " + timeTaken + " milliseconds");
	console.log("Total loop count: " + loopCount);
	console.log(`Cost total : ${costCPUtime}`);
}

main();
