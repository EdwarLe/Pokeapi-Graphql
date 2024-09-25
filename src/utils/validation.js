export const validateInput = (inputValue) => {
    const specialCharRegex = /[^a-zA-Z0-9 ]/g
    if (inputValue <= 3) return 'The name must be at least 3 characters long.'
    if (specialCharRegex.test(inputValue)) return 'Special characters are not allowed.'

    return null
}