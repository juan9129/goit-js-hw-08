import { get, throttle } from "lodash";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name="email"]");
const messageInput = form.querySelector("input[name="message"]");

const saveValueData = () => {
    const dataForm = {
        email:emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringfy(dataForm));
}

const loadValueData = () => {
    const savedData = localStorage.getItem("feedback-form-state");
    const {email, message} = savedData ? JSON.parse(savedData) : null;
    emailInput.value = email;
    messageInput.value = message;
}

const sendButton = (Event) => {
    Event.preventDefault();
    const dataForm = {
        email:emailInput.value,
        message: messageInput.value,
    };
}


