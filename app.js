"use strict";

// МОЕ РЕШЕНИЕ

// async function generator () {
//   const response = await fetch("https://www.boredapi.com/api/activity");
//   return response.json();
// }

// async function getThreeIdea () {
//   const result = await Promise.all([
//     generator(),
//     generator(),
//     generator(),
//   ]);

//   const ideas = [];
//   for (let i = 0; i < 3; i++) {
//     let idea = result[i].activity;
//     ideas.push(idea);
//   }
  
//   document.getElementById("block").innerHTML = ideas;

//   console.log(result);
// }

// getThreeIdea();



// РЕШЕНИЕ ПРЕПОДАВАТЕЛЯ

const wrapper = document.querySelector(".wrapper");

async function getActivity() {
  const res = await fetch("https://www.boredapi.com/api/activity");
  return res.json();
}

async function generate() {
  try {
    wrapper.innerHTML = "";
    const data = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity(),
    ]);
    console.log(data);

    for (const el of data) {
      const element = document.createElement("div");
      element.innerHTML = `${el.activity}`;
      wrapper.appendChild(element);
    }

  } catch (e) {
    console.error(e);
  }
}