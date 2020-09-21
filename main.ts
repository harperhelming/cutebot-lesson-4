let sonar = 0
cuteBot.forward()
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
    	
    } else {
    	
    }
})
