var currentUsers = ["john", "alice", "bob", "mary", "david"];
var newUsers = ["eric", "ALICE", "john", "susan", "michael"];
var _loop_1 = function (newUser) {
    if (currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("The username " + newUser + " is not available. Please enter a new username.");
    }
    else {
        console.log("The username " + newUser + " is available.");
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
