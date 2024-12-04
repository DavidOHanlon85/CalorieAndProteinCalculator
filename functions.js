window.addEventListener("load", (event) => {
  var sexSelected = "";
  var activityMultiplier = 0;
  var calorieAdjustment = 0;
  let totalCalories = 0;

  const maleButton = document.getElementById("male");
  const femaleButton = document.getElementById("female");

  maleButton.addEventListener("click", () => {
    sexSelected = "Male";
    maleButton.classList.add("is-primary"); // Mark as selected
    femaleButton.classList.remove("is-primary"); // Remove from other
  });

  femaleButton.addEventListener("click", () => {
    sexSelected = "Female";
    femaleButton.classList.add("is-primary"); // Mark as selected
    maleButton.classList.remove("is-primary"); // Remove from other
  });

  const sedentary = document.getElementById("sedentary");
  const light = document.getElementById("light");
  const moderate = document.getElementById("moderate");
  const very = document.getElementById("very");
  const extra = document.getElementById("extra");

  sedentary.addEventListener("click", () => {
    activityMultiplier = 1.2;
    setActivityLevelButton(sedentary);
  });

  light.addEventListener("click", () => {
    activityMultiplier = 1.375;
    setActivityLevelButton(light);
  });

  moderate.addEventListener("click", () => {
    activityMultiplier = 1.55;
    setActivityLevelButton(moderate);
  });

  very.addEventListener("click", () => {
    activityMultiplier = 1.725;
    setActivityLevelButton(very);
  });

  extra.addEventListener("click", () => {
    activityMultiplier = 1.9;
    setActivityLevelButton(extra);
  });

  // Set the selected activity level button and reset others
  function setActivityLevelButton(selectedButton) {
    const buttons = [sedentary, light, moderate, very, extra];
    buttons.forEach((button) => {
      if (button === selectedButton) {
        button.classList.add("is-primary"); // Add the primary class for selected button
      } else {
        button.classList.remove("is-primary"); // Remove from non-selected buttons
      }
    });
  }

  const lose = document.getElementById("lose");
  const maintain = document.getElementById("maintain");
  const gain = document.getElementById("gain");

  lose.addEventListener("click", () => {
    calorieAdjustment = -500;
    setGoalButton(lose);
  });

  maintain.addEventListener("click", () => {
    calorieAdjustment = 0;
    setGoalButton(maintain);
  });

  gain.addEventListener("click", () => {
    calorieAdjustment = 250;
    setGoalButton(gain);
  });

  // Set the selected goal button and reset others
  function setGoalButton(selectedButton) {
    const buttons = [lose, maintain, gain];
    buttons.forEach((button) => {
      if (button === selectedButton) {
        button.classList.add("is-primary"); // Add the primary class for selected button
      } else {
        button.classList.remove("is-primary"); // Remove from non-selected buttons
      }
    });
  }

  document.getElementById("mybutton").addEventListener("click", () => {
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);

    // Calculate total calories and protein based on gender and input values
    if (sexSelected === "Male") {
      totalCalories =
        (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) *
          activityMultiplier +
        calorieAdjustment;
    } else if (sexSelected === "Female") {
      totalCalories =
        (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) *
          activityMultiplier +
        calorieAdjustment;
    }

    console.log(totalCalories);
    // Calculate protein (assuming 2g of protein per kg of body weight)
    let totalProtein = 2 * weight;

    // Display results
    document.getElementById("calories").innerHTML =
      Math.floor(totalCalories) + " calories"; // Ensure it's displayed as a number
    document.getElementById("protein").innerHTML = totalProtein + " grams";
  });
});
