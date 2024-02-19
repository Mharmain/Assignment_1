let currentUsers: string[] = ["john", "alice", "bob", "mary", "david"];
let newUsers: string[] = ["eric", "ALICE", "john", "susan", "michael"];
for (let newUser of newUsers) {
    if (currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase())) {
        console.log("The username " + newUser + " is not available. Please enter a new username.");
    }
    else {
        console.log("The username " + newUser + " is available.");
    }
}