module.exports = function toReadable (number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
        teens = ['', '', '', 'thirteen', "fourteen", 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
        tenner = ['', 'ten', 'twenty', 'thirty', "forty", 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let res = ''
    let strNumber = String(number)
    
    if (number <= 12 ) {
        return ones[number]
      } 
      res = number % 10 != 0 ? ones[number % 10] : ''
      if (number % 100 <= 12 && number % 100 != 0) {
        res = ones[number % 100]
      } else if (number % 100 < 20 && number % 100 != 0) {
        res = `${teens[number % 100 % 10]}`
      } else if (number % 100 >= 20 && number % 100 != 0) {
        res = `${tenner[Math.floor(number % 100/10)]} `+ res
      }
      
      if (number / 100 >= 1) {
        res = `${ones[Math.floor(number / 100)]} hundred ` + res
      }

      return res.trim();
}




