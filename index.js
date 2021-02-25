// Your code here
const activity = 'roller-skate'

function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (visual = "*") => function(adjective = "*") {
    return `You are ${visual}${adjective}${visual}!`
}