// this is to be coded in web browser console

// convert JSON to javascript code
const jsonStr = '{"greeting": "hello"}'
JSON.parse(jsonStr)
const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = 'hi'
// convert javascript code to json 
const data = {
    firstName: "John",
    lastName: "Doe"
}
JSON.stringify(data)

