let output = ""
for (let x = 0; x < 8; x++) {
    console.log("x", x);
    for (let y = 0; y < 8; y++) {
        if ((x + y) % 2 == 0) {

            output += " "
        }
        else {
            output += "#"
        }


    }
    output += "\n"


}
console.log(output);