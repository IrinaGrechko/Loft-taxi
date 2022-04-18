export const serverLogin = async (email, password) => {
  return fetch(`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json()).then(data => data.success)
}

export const setCardInfo = async (cardInfo, authToken) => {
  const {cardNumber, expiryDate, cardName, cvc} = cardInfo;
  return fetch(`https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${expiryDate}&
  cardName=${cardName}&cvc=${cvc}&token=${authToken}`).then(res => res.json()).then(data => data.success)
}

export const getCardInfo = async (authToken) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${authToken}`).then(res => res.json()).then(data => data.success)
}
