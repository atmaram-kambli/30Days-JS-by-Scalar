function stringify(str) {
    const words = str.split(" ");
    let res = "";

    for (let index = 0; index < words.length; index++) {
        res += words[index].charAt(0).toUpperCase() + words[index].slice(1,words[index].length);

        if(index < words.length - 1) {
            res += " ";
        }
    }
    console.log(res);
}

stringify("the quick brown fox");
// output --> 'The Quick Brown Fox'