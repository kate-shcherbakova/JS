function showMessage() {
    input = document.getElementById('calc');
    alert(input.value);
}

function onChangeInput() {
    input = document.getElementById('calc');
    console.log(input.value);
}

function sayHello() {
    let userName = document.getElementById('userName').value;
    let age = document.getElementById('age').value;

    let User = {
        age: age,
        name: userName,
        say: function () {
            alert('Hello ' + this.name);

        }
    };

    console.log(User);
    User.say();
}

