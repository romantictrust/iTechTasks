export const INPUT_CHANGE_USER_EMAIL = "INPUT_CHANGE_USER_EMAIL"
export const INPUT_CHANGE_USER_PASSWORD = "INPUT_CHANGE_USER_PASSWORD"

export const setUserEmail = email => ({
    type: INPUT_CHANGE_USER_EMAIL,
    payload: email
})

export const setUserPassword = password => ({
    type: INPUT_CHANGE_USER_PASSWORD,
    payload: password
})