# Frontend Mentor - Crowdfunding product page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex-box
- CSS Grid
- Mobile-first workflow
- Javascript(Vanilla)

### What I learned

```html
        <div class="container">
           <div class="con-header">
              <div class="radio-btn"></div>
              <div class="head-lft">
                <h1 class="sc-head">Bamboo Stand</h1>
                <a href="#" class="card-link">Pledge $25 or more</a>
              </div>
           </div>
            <div class="text-f">
              <h1>101 </h1><span>left</span>
            </div>
          <div class="container-con">
            <p class="sc-para">
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
              you’ll be added to a special Backer member list.
            </p>
          </div>
        </div>
In this sample above☝, I was able to move the <div class="text-f"> from the top to the bottom of the card on mobile view using grid-template-areas.

```
```css
.container {
  padding: 1em 1.5em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas: 
  "h h h h h h h h h h h t"
  ". c c c c c c c c c c c"
  "f f f f f f f f f f f f";
}
```
```js
//Listen to card continue
cardContinue[0].addEventListener('click', e => {
  e.stopPropagation();
  pledge[0].classList.remove('show');
  card[1].classList.remove('active');
  radioBtn[1].classList.remove('active');
  modal.classList.remove('active');
});
cardContinue[1].addEventListener('click', e => {
  e.stopPropagation();
  pledge[1].classList.remove('show');
  card[2].classList.remove('active');
  radioBtn[2].classList.remove('active');
  modal.classList.remove('active');
});
/* I learnt how to use - stopPropagation()
For the pledge continue button, I used it to force my js both bubbling and capture to obey stop propagation when the continue button is click.
*/
```
look at this example below. If you don't use **stopPropagation()** on continue btn function, you will experience the bubbling and capturing;

```html
<!-- // Selected pledge start -->
      <div class="container"> <!-- GrandParent -->
        <div class="pledge">  <!-- Parent -->
            <a href="#" class="btn continue">Continue</a> <!-- Child -->
        </div>
      </div>
```
this is how bubbling and capturing works - bubbling goes up from the child to the Grand parent. capturing goes down from GrandParent to child.

### Continued development

I want to learn more on working with Javascript for clicking on buttons to accumulate the progress bar and show total number of backers. 
You can look this through on the Pledge card where you will click on the amount and it will reflect on the progress bar. 

I want to make it more professional because one user can click on **$25** many times and it will still be accumulating on the total backers, unprofessional.


### Useful resources

- [WebDev youtube channel](https://youtu.be/XF1_MlZ5l6M) - WebDev helped me to learn how to stop Propagation, I believe you will learn more when you check on it.

## Author

- Website - [mosfresh](https://mosfresh.github.io/crowdfund.github.io)
- Frontend Mentor - [@mosfresh](https://www.frontendmentor.io/profile/mosfresh)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)


## Acknowledgments

A big thank to my PC😍 because if not for my laptop, I wouldn't have done this project.
🤣🤣🤣
