$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //toggleGrid();

    //Platforms
    createPlatform(900, 650, 200, 15, "black");
    createPlatform(700, 550, 100, 15, "black");
    createPlatform(1000, 500, 100, 15, "black");
    createPlatform(1300, 500, 100, 15, "black");
    createPlatform(400, 600, 100, 15, "black");
    //Collectables
    createCollectable("steve", 1330, 630);
    createCollectable("max", 1330, 430);
    createCollectable("kennedi", 430, 530);
    // TODO 4 - Create Cannons
    createCannon("left", 450, 2000);
    createCannon("right", 700, 2000);
    createCannon("top", 1200, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
