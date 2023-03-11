# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned
I have learnt various Javascript form validations. How to prevent it from default refresh and reload after button clicking to remove form values. Creation of box-shadow in CSS. Form tag in html and how to work with form. I have learnt how to arrange two divs side-by-side on window.

To see how you can add code snippets, see below:

```html
<form class="form" method="post">
  <input type="text" placeholder="First Name" class="first-name">
  <p class="error" id="first-name-error">First Name cannot be empty</p>
  <input type="text" placeholder="Last Name" class="last-name">
  <p class="error" id="last-name-error">Last Name cannot be empty</p>
  <input type="text" placeholder="Email Address" class="email">
  <p class="error" id="email-error">Email cannot be empty</p>
  <p class="error" id="email-second-error">Looks like this is not an email</p>
  <input type="password" placeholder="Password" class="password">
  <p class="error" id="password-error">Password cannot be empty</p>
  <button class="form-btn">CLAIM YOUR FREE TRIAL</button>
  <p class="terms">By clicking the button, you are agreeing to our <span style="color: hsl(0, 100%, 74%); font-weight: 700;">Terms and Services</span></p>
</form>
```
```css
.div-main {
    display: flex;
    align-items: center;
}

.section {
    flex: 1;
}

.section:first-child {
    margin-right: 20px;
}

```
```js
const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!email){
  document.querySelector("#email-error").style.display = "block";
}else if(!email.toLowerCase().match(re)){
  document.querySelector("#email-error").style.display = "none";
  document.querySelector("#email-second-error").style.display = "block";
}
```

### Useful resources

- [Resource 1](https://stackoverflow.com/) - This helped me to put two divs side-by-side. I really liked this pattern and will use it going forward.
- [Resource 2](https://developer.mozilla.org/) - This is an amazing article which helped me finally understand form validations in vanilla js.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@29nikita](https://www.frontendmentor.io/profile/29nikita)
