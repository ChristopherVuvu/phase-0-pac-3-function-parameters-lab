function introduction(name){
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name = "Aki", language = "Ember.js"){
    console.log(`Hi, my name is ${name} and i am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name ="Gracie", language = "Javascript"){
console.log(`Hi, my name is ${name} and i am learning to program in ${language}.`)
}
console.log(introductionWithLanguage);