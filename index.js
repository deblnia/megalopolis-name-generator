// Arrays for Roman names and car types
let romanNames = [];
const carAndMacNames = [
    "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "Kia", "BMW", "Audi", "Mercedes-Benz", 
    "Volkswagen", "Hyundai", "Tesla", "Mazda", "Subaru", "Lexus", "Porsche", "Jeep", 
    "Chrysler", "Ram", "GMC", "Buick", "Dodge", "Acura", "Infiniti", "Lincoln", "Volvo",
    "Mavericks", "Yosemite", "El Capitan", "Sierra", "High Sierra", "Mojave", "Catalina", 
    "Big Sur", "Monterey", "Ventura", "Sonoma"
  ]
// Fetch the Roman names from the JSON file
fetch('https://raw.githubusercontent.com/deblnia/megalopolis-name-generator/refs/heads/main/data/roman_names.json')
  .then(response => response.json())
  .then(data => {
    romanNames = data;
  })
  .catch(error => {
    console.error("Error loading Roman names:", error);
    romanNames = ["Aurelius", "Cassius", "Octavius", "Valeria", "Flavius", "Julius", "Lucilla", "Nero"];
  });

// Function to generate a random Roman name and car type
function generateName() {
  if (romanNames.length === 0) {
    alert("Roman names are still loading, please try again.");
    return;
  }

  const randomRomanName = romanNames[Math.floor(Math.random() * romanNames.length)];
  const randomCarType = carAndMacNames[Math.floor(Math.random() * carTypes.length)];
  
  // Combine the two to form a name
  const generatedName = `${randomRomanName} ${randomCarType}`;

  // Display the generated name on the page
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Go back to the cluuuuurb, " + generatedName;
}

// Add event listener to the button
document.querySelector("button").addEventListener("click", generateName);

