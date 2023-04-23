"use strict";

// МОЕ РЕШЕНИЕ

// function success(pos) {
//   let crd = pos.coords;
//   const latitude = crd.latitude;
//   const longitude = crd.longitude;
// }

// function error(err) {
//   console.error(err);
// }

// navigator.geolocation.getCurrentPosition(success, error);


// async function getLocation() {
//   const resolve = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${success.latitude}&longitude=${success.longitude}`);
//   const result = await resolve.json();

//   console.log(result.city);
// }

// getLocation();




// РЕШЕНИЕ ПРЕПОДАваТЕЛЯ

function getMyCoordinats() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ latitude: coords.latitude, longitude: coords.longitude, })
      }, (err) => {
        reject(err);
      }
    );
  })
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinats();
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.city);
  } catch(e) {
    console.error(e);
  }
}

getMyCity();