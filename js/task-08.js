const formRef = document.querySelector('.login-form');
console.log(formRef);

formRef.addEventListener("submit", (onSubmit) => {
    onSubmit.preventDefault();
    const {
        elements: { email, password }
    } = onSubmit.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    onSubmit.currentTarget.reset();
}
);
