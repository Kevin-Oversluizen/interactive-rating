"use strict";

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // SECTION 1: Function for selecting rating between 1-5 based on li elements value/copy

  // Get all the li elements and the paragraph with class "msg-text"
  const liItems = document.querySelectorAll(".nr-btn");
  const msgText = document.querySelector(".msg-text");

  // Add a click event listener to each li element
  liItems.forEach(function (li) {
    li.addEventListener("click", function () {
      // Get the text content of the clicked li
      const selectedNumber = li.textContent;

      // Update the content of the paragraph
      msgText.textContent = `You selected ${selectedNumber} out of 5`;

      // Remove the 'selected' class from all li items
      liItems.forEach((item) => item.classList.remove("selected"));

      // Add the 'selected' class to the clicked li item
      li.classList.add("selected");
    });
  });

  // SECTION 2: Function for clicking button to add/remove classes to display answer card instead of question card.

  // Create variables linked to elements
  const button = document.getElementById("submit-btn");
  const questionCard = document.getElementById("card-a");
  const answerCard = document.getElementById("card-b");

  // Check if the elements actually exist
  if (!button || !questionCard || !answerCard) {
    console.error("One or more elements not found");
    return;
  }

  //   Pull Element class lists
  const questionClassList = questionCard.classList;
  const answerClassList = answerCard.classList;

  //   Add function to Button to execute on click the removal/adding of classes with Display styling.
  button.addEventListener("click", function () {
    if (questionClassList.contains("active")) {
      questionClassList.remove("active");
      questionClassList.add("inactive");

      answerClassList.remove("inactive");
      answerClassList.add("active");
    }
  });
});
