const songFirstClass = new Audio('sound/1stclass.mp3')
const songSecondClassUpper = new Audio('sound/2ndupper.mp3')
const songSecondClassLower = new Audio('sound/2ndlower.mp3')
const songThirdClass = new Audio('sound/3rdclass.mp3')
const songPass = new Audio('Pass.mp3')
const songInvalid = new Audio('sound/invalid.mp3')
const songInputSomething = new Audio('sound/inputsmth.mp3')

function checkBtn() {
    let input = document.getElementById('cgpaInput').value
    cgpa = input

    if (cgpa >= 0.001 && cgpa <= 5.00) {

        if (cgpa >= 0 && cgpa <= 1.49) {
            cgpaDisplay.textContent = 'You are advice to withdraw 💔'
        } else if (cgpa >= 1.50 && cgpa <= 1.99) {
            cgpaDisplay.textContent = 'Pass Honor 😆💀'
            songPass.play()
        } else if (cgpa >= 2.00 && cgpa <= 2.49) {
            cgpaDisplay.textContent = 'Third Class Honor 🎃'
            songThirdClass.play()
        } else if (cgpa >= 2.50 && cgpa <= 3.49) {
            cgpaDisplay.textContent = 'Second Class Lower Honor 🥈'
            songSecondClassLower.play()
        } else if (cgpa >= 3.50 && cgpa <= 4.49) {
            cgpaDisplay.textContent = 'Second Class Upper Honor 🎉'
            songSecondClassUpper.play()
        } else if (cgpa >= 4.50 && cgpa <= 5.00) {
            cgpaDisplay.textContent = 'First Class Honor 🌟'
            songFirstClass.play()
        }
    } else if (cgpa > 5.00) {
        cgpaDisplay.textContent = 'Please input a valid CGPA 🙄'
        songInvalid.play()
    } else if (!cgpa) {
        cgpaDisplay.textContent = 'Please input a CGPA 🤢'
        songInputSomething.play()
    }
}

