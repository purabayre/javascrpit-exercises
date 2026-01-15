'use strict';

/*
Create an FAQ section with 4-5 questions. Each question:

- Shows only the question initially
- When clicked, shows/hides the answer below it
- Has a little arrow/icon that rotates when open
- Only one answer should be visible at a time (clicking a new question closes the previous one)
*/

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});
