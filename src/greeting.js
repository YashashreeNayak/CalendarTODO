
const naming = document.querySelector('.naming-item')
    , input = naming.querySelector('input')
    , greeting = document.querySelector('.greeting-item');

const USER_LS = 'currentUser'
    , SHOWING_CN = 'showing';

const saveName = (text) => {
    localStorage.setItem(USER_LS, text);
}

const handleSubmit = (event) => {
    // Prevent the default form submission
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

const askForName = () => {
    naming.classList.add(SHOWING_CN);
    naming.addEventListener('submit', handleSubmit);
}

const paintGreeting = (text) => {
    let hour = new Date().getHours();
    let greetingText;
    naming.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);

    if (hour > 22 || hour < 5) {
        greetingText = 'Good night';
    } else if (hour > 17) {
        greetingText = 'Good evening';
    } else if (hour > 12) {
        greetingText = 'Good afternoon';
    } else {
        greetingText = 'Good morning';
    }
    greeting.innerText = `${greetingText}, ${text}`;
}

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

const initGreeting = () => {
    loadName();
}

initGreeting();

