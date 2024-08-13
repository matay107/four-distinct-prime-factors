var loopCount = 0; // Initialize loop counter
var costCPUtime = 0;
const MAX = 1000000; 
const factorsCache = Array(MAX).fill(0);

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    loopCount++;
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

function precomputePrimeFactors() {
  for (let i = 2; i < MAX; i++) {
    loopCount++;
    if (factorsCache[i] === 0 && isPrime(i)) {
      for (let j = i; j < MAX; j += i) {
        factorsCache[j]++;
      }
    }
  }
}

function findFirstOfFourConsecutive() {
  precomputePrimeFactors();
  let consecutive = 0;

  for (let i = 2; i < MAX; i++) {
    // Increment loop counter
    loopCount++;
    if (factorsCache[i] === 4) {
      consecutive++;
      if (consecutive === 4) {
        // Output total loop count
        return i - 3;
      }
    } else {
      consecutive = 0;
    }

    // Skip ahead if possible
    if (consecutive === 0 && factorsCache[i] < 4) {
      i += 3; // Skip next 3 numbers if current number does not have 4 prime factors
    }
  }
}



function calculateAWSCost(timeTaken) {
  const hourlyRate = 0.12; // r6i.large (2 vCPUs, 16 GB RAM): Around $0.12 per hour.
  const secondsInHour = 3600;
  const millisecondsToSeconds = 1000;

  const costCPUtimeAWS =
    (hourlyRate / secondsInHour) * (timeTaken / millisecondsToSeconds);
  return costCPUtimeAWS;
}


function main() {
  const start = performance.now();
  const result = findFirstOfFourConsecutive();
  const timeTaken = performance.now() - start;

  costCPUtime = calculateAWSCost(timeTaken);


  console.log("Output solution 1: " + result);
  console.log("Total time taken: " + timeTaken + " milliseconds");
  console.log("Total loop count: " + loopCount);
  console.log(`Cost total :   ${costCPUtime}`);
}

main();

module.exports = { isPrime, findFirstOfFourConsecutive };

