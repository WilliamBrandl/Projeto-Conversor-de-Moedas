const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")



   const dolarToday = 5.2
   const euroToday = 5.4
   const libraToday = 6.3


   if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(inputCurrencyValue / dolarToday)

   }

   if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(inputCurrencyValue / euroToday)

   }

   if (currencySelect.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-UK", {
         style: "currency",
         currency: "GBP",
      }).format(inputCurrencyValue / libraToday)


   }


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)


}

function changeCurrency() {



   const currencyName = document.getElementById("currency-name")
   const currencyimgdolar = document.querySelector(".currency-img-dolar")

   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar Americano"
      currencyimgdolar.src = "./assets/dolar.png"

   }



   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyimgdolar.src = "./assets/euro.png"

   }


   if (currencySelect.value == "libra") {
      currencyName.innerHTML = "Libra"
      currencyimgdolar.src = "./assets/libra.png"



   }

   convertValues()
}

currencySelect.addEventListener("change", changeCurrency) // OUVINTE

convertbutton.addEventListener("click", convertValues)


