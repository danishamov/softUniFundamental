function login(input) {
    let username = input[0];
    let password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += (username[i]);
    }
    let incorrectPassword = 0;
    for (let j = 1; j < input.length; j++) {
        let temporaryPassword = input[j];
        if (temporaryPassword === password) {
            console.log(`User ${username} logged in.`)
        } else {
            incorrectPassword++;
            if (incorrectPassword >3) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.")
        }
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])