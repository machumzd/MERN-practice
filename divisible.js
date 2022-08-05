for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 7 === 0)
        console.log("oppo")

    else if (i % 7 === 0)
        console.log("bar")

    else if (i % 3 === 0)
        console.log("bar")

    else
        console.log(i)
}