var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","5146981f-b399-4511-8115-3378e1fbd3d8","20ce5ec6-62ae-4637-893c-449f0b85ad37","dfc53be7-786c-4305-b8eb-81fa595e9903","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","4df0b097-c2f7-4938-a105-cd0b1c23ef20","cd34dd72-f044-4d50-b720-1582df1c9f5a","cc61be7b-9d53-44f5-bbfc-f3bf964ecaac"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"oWvk4kA2XdejTaN0lmCNE0gKVdGm2o0c","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"ax7a2XFFr.VuTsFgb6.oS3kLoEz2uQ3A","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"5146981f-b399-4511-8115-3378e1fbd3d8":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"w2pLnR7R2C4LW_cAAx.JvdU3RFTkxbVQ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/5146981f-b399-4511-8115-3378e1fbd3d8.png"},"20ce5ec6-62ae-4637-893c-449f0b85ad37":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"zVuiqYXKAJbktjYwIaNd0aIj.0jhR0RG","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/20ce5ec6-62ae-4637-893c-449f0b85ad37.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"s","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"4df0b097-c2f7-4938-a105-cd0b1c23ef20":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/qerN0VWVdOLmI2WvXaDIpUO60eJ_eNII/category_backgrounds/background_landscape26.png","frameSize":{"x":400,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"qerN0VWVdOLmI2WvXaDIpUO60eJ_eNII","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qerN0VWVdOLmI2WvXaDIpUO60eJ_eNII/category_backgrounds/background_landscape26.png"},"cd34dd72-f044-4d50-b720-1582df1c9f5a":{"name":"princess","sourceUrl":null,"frameSize":{"x":54,"y":83},"frameCount":1,"looping":true,"frameDelay":12,"version":"_vkjfrPDDVOe9v0jVyLEDoDz1U82YWFL","loadedFromSource":true,"saved":true,"sourceSize":{"x":54,"y":83},"rootRelativePath":"assets/cd34dd72-f044-4d50-b720-1582df1c9f5a.png"},"cc61be7b-9d53-44f5-bbfc-f3bf964ecaac":{"name":"prince","sourceUrl":null,"frameSize":{"x":36,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"6R6D3GQ19qfCJfQ2VkrstQ5jtPFqxWoM","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":82},"rootRelativePath":"assets/cc61be7b-9d53-44f5-bbfc-f3bf964ecaac.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background = createSprite(200,200);
background.setAnimation("background");

var prince = createSprite(200,345,200,345);
prince.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var princess = createSprite(20,50,200,20);
princess.shapeColor="red";

var goal =0;
var death = 0;

prince.setAnimation("prince");
prince.scale=1;
enemy1.setAnimation("enemy1");
enemy1.scale=1;
enemy2.setAnimation("enemy2");
enemy2.scale=1;
enemy3.setAnimation("enemy3");
enemy3.scale=1;
princess.setAnimation("princess");
princess.scale=1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//background(b);

createEdgeSprites();
prince.bounceOff(rightEdge);
prince.bounceOff(leftEdge);
prince.bounceOff(topEdge);
prince.bounceOff(bottomEdge);

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  prince.y=prince.y-4;
}

if(keyDown(DOWN_ARROW)){
  prince.y=prince.y+4;
}

if(keyDown(LEFT_ARROW)){
  prince.x=prince.x-4;
}

if(keyDown(RIGHT_ARROW)){
  prince.x=prince.x+4;
}

drawSprites();
if(prince.isTouching(princess)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  prince.x=200;
  prince.y=345;
  goal=goal+1;
  textSize(50);
  fill("purple");
  text("Goals:"+goal,200,200);
  enemy1.velocityX = 0;
  enemy2.velocityX = 0;
  enemy3.velocityX = 0;
} 

if(prince.isTouching(enemy1)|| prince.isTouching(enemy2)|| prince.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  prince.x=200;
  prince.y=350;
  death = death+1;
  textSize(50);
  fill("black");
  text("death:"+death,200,200);}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
