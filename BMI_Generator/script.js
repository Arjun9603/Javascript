// Cache DOM elements
const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const results = document.querySelector('#results');

// Ensure form and elements exist
if (!form || !heightInput || !weightInput || !results) {
    console.error('Form or required elements not found.');
    if (results) results.textContent = '❌ Error: Required form elements missing';
} else {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted at', new Date().toLocaleTimeString());

        const height = parseFloat(heightInput.value.trim());
        const weight = parseFloat(weightInput.value.trim());

        // Reset results
        results.innerHTML = "";
        results.setAttribute('role', 'alert');

        // Validation
        if (!isValid(height)) {
            results.textContent = '❌ Please enter a valid height ';
            return;
        }
        if (!isValid(weight)) {
            results.textContent = '❌ Please enter a valid weight ';
            return;
        }

        // Calculate BMI
        const bmi = (weight / (height * height) * 10000).toFixed(2);
        console.log('Calculated BMI:', bmi);

        // BMI categories
        const categories = [
            { max: 18.5, label: "underweight 🟡", cls: "underweight" },
            { max: 25,   label: "healthy 🟢", cls: "healthy" },
            { max: 30,   label: "overweight 🟠", cls: "overweight" },
            { max: Infinity, label: "obese 🔴", cls: "obese" }
        ];

        const category = categories.find(c => bmi < c.max);

        // Final message
        results.innerHTML = `
            ✅ Height entered: ${height} cm<br>
            ✅ Weight entered: ${weight} kg<br>
            Your BMI is <b>${bmi}</b> which means you are 
            <span class="${category.cls}">${category.label}</span>
        `;
    });
}

// Helper
function isValid(num) {
    return !isNaN(num) && num > 0;
}
