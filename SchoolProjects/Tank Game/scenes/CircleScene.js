class CircleScene extends Scene{
  constructor(){
    super("Circle Scene");
  }
  start(){
    this.camera = new Camera(20, "azure");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position
    this.hierarchy.push(this.camera);

    WallPrefab(this);

    var circleGO = new GameObject("Circle");
    circleGO.transform.position = new Vector2(4, 4);
    circleGO.transform.rotation = 0;
    var circleGeometry = new Circle(4);
    circleGO.components.push(new GeometryComponent(circleGeometry));
    var wallRenderer = new GeometryRendererComponent("black", circleGeometry);
    circleGO.components.push(wallRenderer);
    circleGO.renderer = wallRenderer;
    circleGO.components.push(new Collider(circleGeometry));
    //wall.components.push(new RotatorBehavior());
    this.hierarchy.push(circleGO);

    this.instantiate(Prefabs.getPrefabByName("Tank1"), new Vector2(0,-4));
    SceneManager.currentScene.getGameObjectByName("Tank1").getComponent(GeometryRendererComponent).changeColor("steelBlue");

    this.instantiate(Prefabs.getPrefabByName("Baddie"), new Vector2(0, 4));

    //Wall Prefab, change colors
    this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallT"));
    this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallB"));
    this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallL"));
    this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallR"));

    //Controls
    guiText = new GameObject("GUI Text 3");
    textComponent = new GUITextComponent("Player 1 Controls: A/D - Rotate, W/S - Forwards/Backwards, 'F' - Shoot", "silver", "30px Arial");
    textComponent.justify = "center";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(width / 2, height / 2 + 250);
    this.hierarchy.push(guiText);

    guiText = new GameObject("GUI Text 4");
    textComponent = new GUITextComponent("Player 2 Controls: Left/Right - Rotate, Up/Down - Forwards/Backwards, '?' - Shoot", "silver", "30px Arial");
    textComponent.justify = "center";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(width / 2, height / 2 + 300);
    this.hierarchy.push(guiText);

    let list = SceneManager.currentScene.findByTag("wall");
    for (var i = 0; i < list.length; i++) {
      var gameObject = list[i];
      console.log(gameObject.name + " colored: " + gameObject.color);
      gameObject.getComponent(GeometryRendererComponent).changeColor("dimgray");
    }
    
    var emptyObject = new GameObject("GameController");
    emptyObject.components.push(new GameControllerBehavior());
    this.hierarchy.push(emptyObject);
  }
}