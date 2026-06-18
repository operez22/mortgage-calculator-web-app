document.getElementById("mortgageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);

    const error = document.getElementById("error");
    const result = document.getElementById("result");

    error.textContent = "";
    result.textContent = "";

    // Validation
    if (isNaN(principal) || principal <= 0) {
        error.textContent = "Please enter a valid principal amount.";
        return;
    }

    if (isNaN(rate) || rate <= 0) {
        error.textContent = "Please enter a valid yearly interest rate.";
        return;
    }

    if (isNaN(years)) {
        error.textContent = "Please select a mortgage term.";
        return;
    }

    // Mortgage math
    const r = rate / 1200;      // monthly rate
    const n = years * 12;       // number of payments

    const payment = (principal * r) / (1 - Math.pow(1 + r, -n));

    if (isFinite(payment)) {
        result.textContent = `Monthly Payment: $${payment.toFixed(2)}`;
    } else {
        error.textContent = "Unable to calculate payment. Check your inputs.";
    }
});
