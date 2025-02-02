class GameControllerBehavior extends Behavior {
  constructor() {
    super();
    this.time = 0;
    this.maxTime = 1;
    this.maxDeadTime = 2;
    this.baddiePrefab = Prefabs.getPrefabByName("Baddie");
    this.p1Prefab = Prefabs.getPrefabByName("Tank1");
    this.p2Prefab = Prefabs.getPrefabByName("Tank2");
    this.xRange = 3;
    this.p1score = p1score;
    this.p2score = p2score;

    this.randArena = 1;
    this.lastArena = lastArena;
    this.canRespawn = 0;

    //this.guiText = "Player 1 Score: ";
    this.STATE_PLAYING = 0;
    this.STATE_DEAD = 1;

    this.score = 0;

    this.gameState = this.STATE_PLAYING;
  }
  start() {

  }

  
  update(gameObject) {
    this.time += Time.deltaTime;
    //let guiText = SceneManager.currentScene.getGameObjectByName("GameController").getComponent(GameControllerBehavior).guiText.getComponent(GUITextComponent);

    //let guiText = this.getComponent(GUITextComponent);
    //guiText.text = "Player1 Score: " +  SceneManager.currentScene.getGameObjectByName("GameController").getComponent(GameControllerBehavior).p1score;

    if (this.gameState == this.STATE_PLAYING) {
      if (this.time > this.maxTime) {
        //SceneManager.currentScene.instantiate(this.baddiePrefab.copy(), new Vector2((Math.random() * 6 - 3) * this.xRange,0));
        this.time -= this.maxTime;
      }
    }
    else if(this.gameState == this.STATE_DEAD){
      if(this.time > this.maxDeadTime){
        if (this.p1score >= 5 || this.p2score >= 5)
        {
          SceneManager.loadScene(SceneManager.getSceneByName("P1 Won"));
        }else {
          while (this.randArena == this.lastArena)
          {
            this.randArena = Math.ceil(((Math.random() * 10) + 1) / 2);
          }
          console.log("Switching to Arena " + this.randArena)
          lastArena = this.randArena;
          switch(this.randArena) {
            case 1: SceneManager.loadScene(SceneManager.getSceneByName("Arena 1")); break;
            case 2: SceneManager.loadScene(SceneManager.getSceneByName("Arena 2")); break;
            case 3: SceneManager.loadScene(SceneManager.getSceneByName("Arena 3")); break;
            case 4: SceneManager.loadScene(SceneManager.getSceneByName("Arena 4")); break;
            case 5: SceneManager.loadScene(SceneManager.getSceneByName("Arena 5")); break;
            default: SceneManager.loadScene(SceneManager.getSceneByName("Arena 5")); break;
          }

        }
      }
    }
  }
  destroyMainCharacter(mainCharacter) {
    SceneManager.currentScene.destroy(mainCharacter);

    let gameObject = new GameObject();
    let particleSystemComponent = new ParticleSystemComponent("blue");
     
    gameObject.components.push(particleSystemComponent);
    SceneManager.currentScene.instantiate(gameObject, mainCharacter.transform.position)
    this.gameState = this.STATE_DEAD;
    this.time = 0;

    p2score++;
    this.p2score++;
  }
  destroyOtherCharacter(secondPlayer) {
    SceneManager.currentScene.destroy(secondPlayer);

    let gameObject = new GameObject();
    let particleSystemComponent = new ParticleSystemComponent("red");
     
    gameObject.components.push(particleSystemComponent);
    SceneManager.currentScene.instantiate(gameObject, secondPlayer.transform.position)
    this.gameState = this.STATE_DEAD;
    this.time = 0;

    p1score++;
    this.p1score++;
  }
  resetCharacter(mainCharacter) {
    SceneManager.currentScene.destroy(mainCharacter);
  }
}