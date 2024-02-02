//The main scene in our game
class Arena2 extends Scene {
  constructor() {
    super("Arena 2"); //The name of our scene
  }
  start() {
    this.camera = new Camera(20, "goldenrod");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position
    this.hierarchy.push(this.camera);
    hitAmount = 2;
    bulletLife =  225;

    var guiText = new GameObject("GUI Text");
    var textComponent = new GUITextComponent("Physics Test Game.", "white", "30px Arial");
    textComponent.justify = "center";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(width / 2, height / 2 - 250);
    var textBehavior = new TextBehavior();
    guiText.components.push(textBehavior);
    this.hierarchy.push(guiText);

    
    this.instantiate(Prefabs.getPrefabByName("Tank1"));
    SceneManager.currentScene.getGameObjectByName("Tank1").getComponent(GeometryRendererComponent).changeColor("mediumblue");

    this.instantiate(Prefabs.getPrefabByName("Tank2"));
    SceneManager.currentScene.getGameObjectByName("Tank2").getComponent(GeometryRendererComponent).changeColor("firebrick");

    //this.instantiate(Prefabs.getPrefabByName("Baddie"), new Vector2(0, 4));

    {//Obstacles / inner walls
    var wall = new GameObject("VeritcalTopRight");
    wall.transform.position = new Vector2(0, 0);
    wall.transform.rotation = 0;
    var wallGeometry = new AxisAlignedRectangle(2, 10);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("dimgray", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    wall.components.push(new RotatorBehavior());
    this.hierarchy.push(wall);

    var wall = new GameObject("MidSquare");
    wall.transform.position = new Vector2(-5, 4);
    wall.transform.rotation = 0;
    var wallGeometry = new AxisAlignedRectangle(3, 3);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("dimgray", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    //wall.components.push(new RotatorBehavior());
    this.hierarchy.push(wall);
    
    var wall = new GameObject("MidSquare");
    wall.transform.position = new Vector2(5, -4);
    wall.transform.rotation = 0;
    var wallGeometry = new AxisAlignedRectangle(3, 3);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("dimgray", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    //wall.components.push(new RotatorBehavior());
    this.hierarchy.push(wall);

    var wall = new GameObject("MidSquare");
    wall.transform.position = new Vector2(-6, -6);
    wall.transform.rotation = 0;
    var wallGeometry = new AxisAlignedRectangle(1, 6);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("dimgray", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    wall.components.push(new RotatorBehavior());
    this.hierarchy.push(wall);

    
    var wall = new GameObject("MidSquare");
    wall.transform.position = new Vector2(6, 6);
    wall.transform.rotation = 0;
    var wallGeometry = new AxisAlignedRectangle(1, 6);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("dimgray", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    wall.components.push(new RotatorBehavior());
    this.hierarchy.push(wall);

    }

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
    
    {//Wall Prefab, change colors
      this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallT"));
      this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallB"));
      this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallL"));
      this.wall1 = this.instantiate(Prefabs.getPrefabByName("WallR"));

      let list = SceneManager.currentScene.findByTag("wall");
      for (var i = 0; i < list.length; i++) {
        var gameObject = list[i];
        gameObject.getComponent(GeometryRendererComponent).changeColor("dimgray");
      }
    }
    
    var emptyObject = new GameObject("GameController");
    emptyObject.components.push(new GameControllerBehavior());
    this.hierarchy.push(emptyObject);
  }
}