const checkForSpam = function(message) {
    let lowerMessage = message.toLowerCase();

    return lowerMessage.includes('sale') || lowerMessage.includes('spam');
};

console.log(checkForSpam('Latest technology news'));
  
console.log(checkForSpam('JavaScript weekly newsletter'));
  
console.log(checkForSpam('Get best sale offers now!'));
  
console.log(checkForSpam('[SPAM] How to earn fast money?'));