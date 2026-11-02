export function validateRecoveryPhrase(

phrase:string

){



const words =

phrase.trim()

.split(" ");





return {


valid:

words.length >= 12,


wordCount:

words.length


};


}
