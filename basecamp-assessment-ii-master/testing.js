function getUserinfo (firstName, lastName, callBack){
    var name = firstName + '' + lastName;
    return callBack(name);
}
function greetUser(name){
    return 'hello, ' + name + "!";
}

alert (getUserInfo("Ian", "Blake",greetUser));
