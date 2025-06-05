function facbig( facn ) {

    let ans = [1];

    function mularr(n) {
        let crr = 0;
        let num = 0;
        for (i = 0; i < ans.length; i++) {
            num = (ans[i] * n) + crr;
            ans[i] = num % 10;
            crr = 0;
            if (num > 10) {
                crr = Math.trunc(num / 10);
            }
        };
        num = crr;
        while (num > 0) {
            ans.push(num % 10);
            num = Math.trunc(num / 10);
        }

    }
    for (let i = 1; i <= facn; i++) {
        mularr(i)
    }

    let strans = "";

    for (let i = ans.length - 1; i >= 0; i--) {
        strans += (ans[i]);
    }

    console.log(strans)
}


facbig( 10)