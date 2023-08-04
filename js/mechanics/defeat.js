function checkIfDefeat() {
    if (getResource("food") < 0) return showEndScreen("Your incompetence has failed the subjects, my Lord.", "The fundamental duty is to feed the people you govern. To lead them to a state of starvation is far too much. The king has taken away your land and stripped you of your title.")
    if (game.currentSeason === 3 && getResource("coal") < 0) return showEndScreen("The subjects have frozen, my Lord.", "Due to your negligence, our people had nothing to burn in their stoves. Many of them perished in their sleep, with no chance of rescue. As soon as winter ends, expect punishment from the King for such grave neglect.")
    if (game.turns < 0) return showEndScreen("I'm sorry, my Lord, but the king has deemed that you are not managing well.", "As a result, he has decided to revoke your lands and hand them over to another, allied vassal. It has been an honor to serve as your advisor, and perhaps in the future, you will fare better.")
    
    
    return false
}