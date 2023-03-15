const aliceScore = [17, 28, 30]
const bobScore = [99, 16, 8]

let aliceSum = 0;
let bobSum = 0;

for (let i = 0; i < aliceScore.length; i++) {
  if (aliceScore[i] < bobScore[i]) {
    bobSum += 1
  } else if (aliceScore[i] > bobScore[i]) {
    aliceSum += 1
  }
}

//Output form ex 2 1
console.log(aliceSum + ' ' + bobSum)