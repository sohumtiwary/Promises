setTimeout(() => {
    console.log("Evan is a guy")
}, 3000);

function orderMyShakeShack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Evan is a guy")
        }, 3000);
    })
}

// orderMyShakeShack()
//     .then((value) => console.log('we got a value back:', value))
//     .catch((value) => console.log("oh no!", value))

async function main(){
    try {
        const result = await orderMyShakeShack()
        console.log('here\'s our order:', result)
    } catch (error) {
        console.log('couldn\'t do the order, erro was: ', error)
    }
}

main()