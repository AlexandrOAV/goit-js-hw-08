import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle((inputOfForm), 500));   
formEl.addEventListener('submit', submitForm);
reloadPageForm();
function inputOfForm() {
let feedbackUser = {
    email: inputEl.value,
    massage: textareaEl.value,
  }
    saveStorage(feedbackUser);   
    return feedbackUser;
} 
function saveStorage(object) {
    let addElementStorage = JSON.stringify(object);
    localStorage.setItem('feedback-form-state', addElementStorage);
    let objectLocalStorage = localStorage.getItem('feedback-form-state');
}

function reloadPageForm() {
    let objectJson = localStorage.getItem('feedback-form-state')
    try {
    let loadObjectStorage = JSON.parse(objectJson);
    if (!loadObjectStorage) {
        return
    } 
        inputEl.value = loadObjectStorage.email;
        textareaEl.value = loadObjectStorage.massage;
        } catch (error){
        console.error('Initial data error ');
        localStorage.clear('feedback-form-state')
    }
   
}
function submitForm(event) {
    event.preventDefault();
    const submitUser = {
        email: inputEl.value,
        massage: textareaEl.value,
    }
    console.log('User:', submitUser);

    inputEl.value = '';
    textareaEl.value = '';
    localStorage.removeItem('feedback-form-state');
    // ще як варіант можна повністю очистити сховище через  clear()
}


