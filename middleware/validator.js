const validEmail = require("email-validator")

module.exports = {
  validateReg: (req, res, next) => {
    const { email, password, paswordRepeat } = req.body

    if (!validEmail.validate(email)) return res.send({ error: true, message: "Enter valid email ", data: null })
    if (password !== paswordRepeat) return res.send({ error: true, message: "Passwords does not match", data: null })
    if (password.length < 3 || password.length > 20) return res.send({ error: true, message: "Password should be longer", data: null })

    next()
  }
}