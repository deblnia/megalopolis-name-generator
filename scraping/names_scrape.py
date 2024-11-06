import requests
from bs4 import BeautifulSoup
import json
import os

# URL of the Wikipedia page
url = "https://en.wikipedia.org/wiki/List_of_Roman_nomina"

# Fetch the content
response = requests.get(url)

# Check for a successful response
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Target only the list items under relevant sections
    names = []
    for ul in soup.select("#mw-content-text .mw-parser-output ul"):
        for li in ul.select("li"):
            # Clean up text to exclude numbers and other non-name characters
            name = li.get_text(strip=True)
            if name.isalpha():  # Ensures we get only pure alphabetic names
                names.append(name)

    # Specify the directory and JSON file name
    directory = "./data"
    json_file_name = os.path.join(directory, "roman_names.json")

    # Create the directory if it doesn't exist
    os.makedirs(directory, exist_ok=True)

    # Save the names to a JSON file
    with open(json_file_name, "w") as json_file:
        json.dump(names, json_file, indent=2)
    
    print(f"Data has been saved to {json_file_name}")
else:
    print(f"Error fetching data: {response.status_code}")