const tail = require("../tail")
const assertEqual = require("../assertEqual")
const words = ["Yo Yo", "Lighthouse", "Labs", "check"]

assertEqual(tail(words), "check")