const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    let sum = 0;
    let num1;
    let num2;

    const dataArray = data.split("\n");

    dataArray.forEach((word) => {
      const wordSplit = word.split("");

      for (let i = 0; i <= wordSplit.length; i++) {
        if (wordSplit[i] == Number(wordSplit[i])) {
          num1 = wordSplit[i];
          break;
        }
      }

      for (let i = wordSplit.length; i >= 0; i--) {
        if (wordSplit[i] == Number(wordSplit[i])) {
          num2 = wordSplit[i];
          sumTemp = num1 + num2;
          let sumTempInteger = Number(sumTemp);
          sum += sumTempInteger;
          break;
        }
      }
    });
    console.log(sum);
  }
});
