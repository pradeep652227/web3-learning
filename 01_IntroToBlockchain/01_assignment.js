/*
What if I ask you the following question — 
Give me an input string that outputs a SHA-256 hash that starts with 00000 . 
How will you do it?
*/

const crypto=require('crypto');

let prefixToMatch="00000";

let obj=GenerateHashWithSamePrefix(prefixToMatch);
let inputString=obj.inputString;
let correspondingHash=obj.correspondingHash;

console.log(`For the Hash to have Prefix- ${prefixToMatch}.\nInput String should be ${inputString}.\nCorrespoding Hash Value is ${correspondingHash}`);

function GenerateHashWithSamePrefix(prefixToMatch){
    let input=0;
    while(true){//infinite loop until the condition is met
        let inputString=input.toString();
        let correspondingHash=crypto.createHash('sha256').update(inputString).digest('hex');
        if(correspondingHash.startsWith(prefixToMatch)){
            return {inputString:inputString,correspondingHash:correspondingHash};
        }
        input++;
    }
}