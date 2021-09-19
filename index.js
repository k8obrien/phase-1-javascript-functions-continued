function saturdayFun(activity = "roller-skate"){
    return`This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

function mondayWork(responsibility = "go to the office"){
    return `This Monday, I will ${responsibility}.`;
}
mondayWork("pet my cat")

function wrapAdjective(wrap = '*'){
     return function(word = 'special'){
        return `You are ${wrap}${word}${wrap}!`
    }
}
