export const REG = "REG";

export const reg = (login, password, nickname, email) => {
  return {
    type: REG,
    login,
    password, 
    nickname, 
    email
  }
}

export const REG_SUCCESS = "REG_SUCCESS";

export const regSuccess = () => {
  return {
    type: REG_SUCCESS,
  }
}

export const REG_ERROR = "REG_ERROR";

export const regError = (error) => {
  return {
    type: REG_ERROR,
    error
  }
}