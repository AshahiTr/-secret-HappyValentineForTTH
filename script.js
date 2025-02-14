const messages = [
    "Chắc chưa??",
    "Thật ấy??",
    "Suy nghĩ kỹ điiii",
    "Please pleaseee…",
    "Nghĩ lại trước khi lựa chọn đii !!",
    "Bạn chọn NO tôi buồn đấyyy.",
    "Thôi được rồi bạn chọn YES đi :3",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}