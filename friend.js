function bestFriend(name) {
    console.log(name)
    var max = 0;
    for (var i = 0; i < 3; i++) {
        if (max < name[i].length) {
            max = name[i].length;

        }
        else {
            continue;
        }


    }
    return max;
}

var ary = ["Ahammmedd", "Joteyyy", "safia"];
maxLength = bestFriend(ary);
console.log(maxLength);