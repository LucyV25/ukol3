const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
  
  const outputDiv = document.getElementById("output");
  
  function addToOutput(title, values) {
    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = title;
    outputDiv.appendChild(sectionTitle);
    
    const paragraph = document.createElement("p");
    paragraph.textContent = values.join(", ");
    outputDiv.appendChild(paragraph);
  }

  addToOutput("Všechna čísla", numbers);
  
  const squares = numbers.map(num => num ** 2);
  addToOutput("Druhé mocniny všech čísel", squares);
  
  const negativeNumbers = numbers.filter(num => num < 0);
  addToOutput("Pouze záporná čísla", negativeNumbers);
  
  const absoluteValues = numbers.map(num => Math.abs(num));
  addToOutput("Absolutní hodnoty všech čísel", absoluteValues);
  
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  addToOutput("Pouze sudá čísla", evenNumbers);
  
  const divisibleByThree = numbers.filter(num => Math.abs(num) % 3 === 0);
  addToOutput("Čísla s absolutní hodnotou dělitelnou třemi", divisibleByThree);
  
  const distancesFromFive = numbers.map(num => Math.abs(num - 5));
  addToOutput("Vzdálenost každého čísla od 5", distancesFromFive);
  
  const squaredDistancesFromFive = distancesFromFive.map(dist => dist ** 2);
  addToOutput("Druhé mocniny vzdáleností od 5", squaredDistancesFromFive);
  
  const negativeCount = negativeNumbers.length;
  addToOutput("Počet záporných čísel", [negativeCount]);
  
  const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
  addToOutput("Součet všech čísel", [sumOfNumbers]);
  
  const averageOfNumbers = sumOfNumbers / numbers.length;
  addToOutput("Průměr všech čísel", [averageOfNumbers.toFixed(2)]);
  
  const sumOfPositiveNumbers = numbers.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  addToOutput("Součet všech kladných čísel", [sumOfPositiveNumbers]);
  