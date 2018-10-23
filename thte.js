getA().then(
    a => {
        getB(a).then(
            b => {
                getC(b).then(
                    c => a + b + c,
                    err => console.log(err)
                )
            },
            err => console.log(err)
        )
    },
    err => console.log(err)
)
