var loopCount = 0;  

function isPrime(n) {
  if (n <= 1) return false; 

  for (let i = 2; i <= n / 2; i++) {
    loopCount++;
    if (n % i === 0) return false; 
  }
  return true;
}

function getPrimeFactors(n) {
  let factors = new Set();
  for (let i = 2; i <= n; i++) { 
    loopCount++;
    while (n % i === 0) {  
      loopCount++;
      if (isPrime(i)) { 
        factors.add(i); 
      }
      n /= i; 
    }
  }
  return factors;
}

function findFirstOfFourConsecutive() {
  let i = 2;
  let consecutive = 0;


  while (true) { 
    loopCount++; 
    let factors = getPrimeFactors(i);  

    if (factors.size === 4) { /
      consecutive++;
      if (consecutive === 4) {
  
        return i - 3;
      }
    } else {
      consecutive = 0;
    }

    i++;
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

module.exports = { getPrimeFactors, isPrime, findFirstOfFourConsecutive };


// Output solution 1: 134043
// Total time taken: 6200.2898000000005 milliseconds
// Total loop count: 2,079,574,576
// Cost total :   0.00020667632666666668


1.อธิบายเป็น จากที่ได้รับโจทย์มาคือการหาค่าค่า