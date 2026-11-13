let messages = ["Happy birthday to Sneh",
    "Happy birthday to Sneh Gurdasani",
    "Happy birthday to SG"
]
let i = messages.length;
let s = Math.floor(Math.random() * i);

document.getElementById("msg")
    .innerHTML = '" ' + messages[s] + ' "';