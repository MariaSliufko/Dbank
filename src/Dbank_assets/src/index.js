import { Dbank } from  "../../declarations/Dbank";

window.addEventListener("load", async function() {
    // console.log("Finished loading");
    const currentAmount = await Dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});


document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();
    // console.log("Submitted");
    
    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", "true");

    if (document.getElementById("input-amount").value.length != 0) {
        await Dbank.topUp(inputAmount);
    }


    const currentAmount = await Dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

    document.getElementById("input-amount").value = "";

    button.removeAttribute("disabled");
});