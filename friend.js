function bestFriend(friend) {
    let max = 0;
    let largestString;
    for (let i = 0; i < friend.length; i++) {
        // console.log(friend[i], friend[i].length);
        if (friend[i].length > max) {
            max = friend[i].length;
            largestString = friend[i];
        }
    }
    console.log("Largest String=> " + largestString + " & Length is=> " + max);
}
let friendList = bestFriend(["Fatema Akter", "Rashedul Islam", "Rash", "Tun"]);
console.log(friendList);