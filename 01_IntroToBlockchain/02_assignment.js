/*
Assignment #2
What if I ask you that the input string should start with 100xdevs ? How would the code change?
*/

const crypto=require('crypto');

let prefixToMatch="00000";

let obj=GenerateHashWithSamePrefix(prefixToMatch);
let inputString=obj.inputString;
let correspondingHash=obj.correspondingHash;

console.log(`For the Hash to have Prefix- ${prefixToMatch}.\nwith this Input String ${inputString}.\nCorrespoding Hash Value is ${correspondingHash}`);

function GenerateHashWithSamePrefix(prefixToMatch){
    let input=0;
    while(true){//infinite loop until the condition is met
        let inputString="100xdevs"+input.toString();
        let correspondingHash=crypto.createHash('sha256').update(inputString).digest('hex');
        if(correspondingHash.startsWith(prefixToMatch)){
            return {inputString:inputString,correspondingHash:correspondingHash};
        }
        input++;
    }
}