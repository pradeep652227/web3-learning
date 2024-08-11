//1.)Byes to Ascii
function bytesToAscii(byteArray){

    return new TextDecoder().decode(byteArray);
}

const bytes=new Uint8Array([72,101,108,108,111]);//corresponds to 'Hello'
const correspondingAsciiString=bytesToAscii(bytes);
console.log(correspondingAsciiString);

//2.)Ascii to Byte Array
function asciiToByte(asciiString){
    return new Uint8Array([...asciiString].map(char=>char.charCodeAt(0)));
    /*
    Or, 
    const arr=[];
    for(let i=0;i<asciiString.lengthli++){
        arr.push(asciiString.charCodeAt(i));
    }
        return new Uint8Array(arr);
    */
}
const ascii="Hello";
const correspondingByteArray=asciiToByte(ascii);
console.log(correspondingByteArray);

//3.)Array to Hex
function arrayToHex(byteArray){
    let hexString='';
    for(let i=0;i<byteArray.length;i++){
        hexString+=byteArray[i].toString(16).padStart(2,'0');
    }
    return hexString;
}

const byteArray1=new Uint8Array([72,101,108,108,111]);
const correspondingByteToHexString=arrayToHex(byteArray1);
console.log(correspondingByteToHexString);

//4.)Hext To Array
function hexToArray(hexString){
    let byteArray=new Uint8Array(hexString.length/2);
    for(let i=0;i<byteArray.length;i++){
        byteArray[i]=parseInt(hexString.substr(i*2,2),16);
    }
    return byteArray;
}
const hexString='48656c6c6f';
const correspondingByteArray1=hexToArray(hexString);
console.log(correspondingByteArray1);