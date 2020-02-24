var attack = document.querySelector(".attack");

function startattack() {
  attack.innerHTML="";
  document.body.querySelector(".reset").innerHTML="";
  
  var warriors = [
    {
      name: "Jerry",
      hp: 10,
      damage: 3,
      type: "fire"
    },
    {
      name: "Jimmy",
      hp: 8,
      damage: 6,
      type: "ice"
    },
    {
      name: "Jared",
      hp: 6,
      damage: 9,
      type: "fire"
    }
  ];
  
  var dragonHealth = 10;
  var dragonEle = document.createElement("div");
  var warrior = document.createElement("warrior");
  var endEle = document.createElement("endEle");
  dragonEle.innerHTML = "The dragon's Health is: " + dragonHealth;
   function buttonWarrior(warList) {
    var warrior = document.createElement("button");
    warrior.innerHTML = warList.name + "'s health is: " + warList.health;
    warrior.addEventListener("click", end);
    function end() {
      attackDragon(warList.damage, warList.type, warList, warrior);
    }
   attack.appendChild(warrior);
  }
   function attackDragon(damage, type, object, element) {
    if (type === "fire") {
      dragonHealth = dragonHealth - (damage - 1);
    } else if (type === "ice") {
      dragonHealth = dragonHealth - (damage + 1);
    } else {
      dragonHealth = dragonHealth - damage;
    }

    var dragonsAttack = Math.floor(Math.random() * 2 + 1);

    object.health = object.health - dragonsAttack;
    element.innerHTML = object.health - dragonsAttack;

    if (object.health <= 0) {
      element.innerHTML = "You lose!";
      warrior.removeEventListener("click", endElement);
    } else {
      element.innerHTML = object.name + "'s health is: " + object.health;
    }

    dragonEle.innerHTML = "The dragon's health is: " + dragonHealth;

    if (dragonHealth <= 0) {
      document.body.querySelector(".reset").innerHTML =
        "Congratulations! You win!";
      dragonElement.innerHTML =
        "The dragon has been defeated.";
      document.body
        .querySelector(".reset")
        .addEventListener("click", function() {
          startattack();
        });
    } else if (
      warriors[1].health <= 0 &&
      warriors[2].health <= 0 &&
      warriors[3].health <= 0
    ) {
      document.body.querySelector(".reset").innerHTML =
        "You lose!";
      document.body
        .querySelector(".reset")
        .addEventListener("click", function() {
          startattack();
        });
    } 
  } 
for (var i = 0; i < warriors.length; i++) {
    buttonWarrior(warriors[i]);
  }
 attack.appendChild(dragonEle);
} 
startattack();