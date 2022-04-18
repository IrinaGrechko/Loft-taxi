export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SET_CARD = 'SET_CARD'
export const GET_CARD = 'GET_CARD'
export const FETCH_CARD = 'FETCH_CARD'
export const REGISTRATION = 'REGISTRATION'

export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}})
export const setCardInfo = () => ({type: SET_CARD})
export const fetchCardInfo = (cardInfo) => ({ type: FETCH_CARD, payload: {cardInfo}})
export const getCardInfo = (authToken) => ({ type: GET_CARD, payload: {authToken}})

