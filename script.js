// Good Luck 💪🏾
function brokenKeys(correctPhrase, typedPhrase) {
    let brokenKeysArr = [];

    correctPhrase = correctPhrase.toLowerCase();
    typedPhrase = typedPhrase.toLowerCase();
  
    for (let i = 0; i < correctPhrase.length; i++) {
      if (correctPhrase[i] !== typedPhrase[i] && !brokenKeysArr.includes(correctPhrase[i])) {
        brokenKeysArr.push(correctPhrase[i]);
      }
    }
  
    return brokenKeysArr;
  }
  console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp"));
  console.log(brokenKeys("good night", "gppd night")); 