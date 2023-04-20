//if i am a string: True
// if i am anything but a string: false

const iamastring=true

if (iamastring === iamastring){
    console.log('true');
}
else if (false !== iamastring) {
   console.log ('The boolean value false is falsy')
}
else if (null !== iamstring) {
    console.log ('The null value is falsy')
}
else if (undefined !== iamstring){
    console.log ('undefined is falsy ')
}
else if (0 !== iamastring) {
    console.log ('The number 0 is falsy (the only falsy number)')
}
if ("" !== iamastring) {
    console.log('The empty string is falsy (the only falsy string)')
}