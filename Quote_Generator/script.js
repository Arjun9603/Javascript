const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const API_KEY = "+TXo2HbXgRxma+Wljaf/SA==fNL6e8THnMZ1PLL0";

async function getQuoteFromApiNinjas() {
  try {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: { "X-Api-Key": API_KEY }
    });

    console.log("Response status:", res.status);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("API response:", data);

    if (Array.isArray(data) && data.length > 0) {
      const quoteObj = data[0];
      quoteEl.textContent = quoteObj.quote;
      authorEl.textContent = `~ ${quoteObj.author || "Unknown"}`;
    } else {
      quoteEl.textContent = "No quote received.";
      authorEl.textContent = "";
    }
  } catch (err) {
    quoteEl.textContent = "Could not fetch quote.";
    authorEl.textContent = "";
    console.error("Error fetching quote:", err);
  }
}

newQuoteBtn.addEventListener("click", getQuoteFromApiNinjas);

getQuoteFromApiNinjas();