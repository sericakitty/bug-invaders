<script>
import { Scene, Utils, Input } from 'phaser';
import bug1Img from '@/assets/img/bug1.png';
import bug2Img from '@/assets/img/bug2.png';
import bug3Img from '@/assets/img/bug3.png';
import bugPelletImg from '@/assets/img/bugPellet.png';
import bugRepellentImg from '@/assets/img/bugRepellent.png';
import codeyImg from '@/assets/img/codey.png';
import platformImg from '@/assets/img/platform.png';


export default class LevelHandler extends Scene {
  constructor(key) {
    super(key);
    this.levelKey = key;

    this.gameState = {
      active: false,
      enemySpeed: {
        'bug1': 1,
        'bug2': 2,
        'bug3': 3,
      },
      bulletTime: 0,
      scoreText: '',

    };


  }

  init() {
    console.log(`this is ${this.levelKey}`);
  }

  preload() {
    this.load.image('bug1', bug1Img)
    this.load.image('bug2', bug2Img);
    this.load.image('bug3', bug3Img);
    this.load.image('codey', codeyImg);
    this.load.image('platform', platformImg);
    this.load.image('bugPellet', bugPelletImg);
    this.load.image('bugRepellent', bugRepellentImg);

    this.width = this.game.canvas.width;
    this.height = this.game.canvas.height;
    this.ratio = this.width / this.height;

  }


  resizeWold() {
    if (this.gameState.bug1) {
      this.gameState.bug1.scale = this.ratio
    }
    if (this.gameState.bug2) {
      this.gameState.bug2.scale = this.ratio
    }
    if (this.gameState.bug3) {
      this.gameState.bug3.scale = this.ratio
    }
    if (this.gameState.player) {
      this.gameState.player.scale = this.ratio
    }
    if (this.gameState.bugPellet) {
      this.gameState.bugPellet.scale = this.ratio
    }
    if (this.gameState.platform) {
      this.gameState.platform.setDisplaySize = this.width, 15;
    }

  }

  numOfTotalEnemies() {
    const enemyNumbers = this.gameState.enemies.getChildren().length;
    return enemyNumbers;
  }

  // Creating static platforms
  createPlatform() {
    const platform = this.physics.add.staticGroup();

    platform.create(0, this.height * 0.95, 'platform').setOrigin(0, -0.2).setScale(2.15, 0.5).refreshBody();

    this.gameState.platform = platform;
  }

  // Uses the physics plugin to create Codey
  createPlayer() {
    this.gameState.player = this.physics.add.sprite(this.width * 0.50, this.height * 0.90, 'codey').setScale(0.75);
  }

  createEnemies() {
    this.gameState.enemies = this.physics.add.group();

    for (let yVal = 1; yVal <= this.gameState.numOfEnemiesPerYLine; yVal += 1) {
      for (let xVal = 1; xVal < this.gameState.numOfEnemiesPerXLine * 2; xVal += 1.5) {
        const enemyIndex = Math.floor(Math.random() * this.gameState.enemyGroups.length);
        this.gameState.enemies.create(50 * xVal, 50 * yVal, this.gameState.enemyGroups[enemyIndex]).setScale(0.5).setGravityY(-200);
      }
    }

    this.gameState.enemies.getChildren().forEach((bug) => {
      bug.name = bug.texture.key;
      bug.speed = this.gameState.enemySpeed[bug.name];
    });
  }

  createColliderPlayerAndPlatform() {
    // Create Collider objects
    this.gameState.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.gameState.player, this.gameState.platform);
  }

  createEnemiesPellets() {
    this.gameState.enemiesPellets = this.physics.add.group();
  }

  createRepellets() {
    this.gameState.bugRepellent = this.physics.add.group();
    this.gameState.bugRepellent.createMultiple(10, 'bugRepellent');
  }

  createLevelText() {
    this.gameState.levelText = this.add.text(this.width * 0.475, this.height * 0.02, this.levelKey, { fontSize: '20px', fill: '#000000' });
  }

  // Displays the initial number of bugs, this value is initially hardcoded as ''
  createScoreText() {
    this.gameState.scoreText = this.add.text(this.width * 0.45, this.height * 0.97, `Bugs Left: ${this.numOfTotalEnemies()}`, { fontSize: '15px', fill: '#000000' });
  }

  createCursors() {
    this.gameState.cursors = this.input.keyboard.createCursorKeys();
  }

  generateEnemiesPellets() {
    const randomBug = Utils.Array.GetRandom(this.gameState.enemies.getChildren());
    if (randomBug !== null) {
      this.gameState.enemiesPellets.create(randomBug.x, randomBug.y, 'bugPellet');
    }
  }

  fireEnemyPellets() {
    this.gameState.enemiesPelletsLoop = this.time.addEvent({
      delay: 500,
      callback: this.generateEnemiesPellets,
      callbackScope: this,
      loop: true,
    });
  }

  destroyEnemyPellets() {
    this.physics.add.collider(this.gameState.enemiesPellets, this.gameState.platform, (pellet) => {
      pellet.destroy();
    });
  }

  destroyEnemy() {
    this.physics.add.collider(this.gameState.enemies, this.gameState.bugRepellent, (bug, repellent) => {
      bug.destroy();
      repellent.destroy();

      this.gameState.scoreText.setText(`Bugs Left: ${this.numOfTotalEnemies()}`);
    });
  }

  sortedEnemies() {
    const orderedByXCoord = this.gameState.enemies.getChildren().sort((a, b) => a.x - b.x);
    return orderedByXCoord;
  }

  moveEnemy() {
    this.gameState.enemies.getChildren().forEach((bug) => {
      bug.x += bug.speed;

      if (bug.x <= 20) {
        bug.speed *= (-1);
        bug.y += 20;
      }
      if (bug.x >= this.width - 20) {
        bug.speed *= (-1);
        bug.y += 20;
      }

      // This makes enemies move in pack
      // this.gameState.leftMostBug = this.sortedEnemies()[0];
      // this.gameState.rightMostBug = this.sortedEnemies()[this.sortedEnemies().length - 1];

      // if (this.gameState.leftMostBug.x <= 20) {
      // this.gameState.enemySpeed[bug.name] = 1;

      // bug.y += 5;
      // }
      // if (this.gameState.rightMostBug.x >= this.width - 20) {
      // this.gameState.enemySpeed[bug.name] = -1;
      // bug.y += 5;
      // }
    });
  }

  fireRepellets() {
    this.gameState.bugRepellent.create(this.gameState.player.x, this.gameState.player.y, 'bugRepellent').setGravityY(-500);
  }

  cursorActions() {
    if (this.gameState.cursors.left.isDown) {
      this.gameState.player.setVelocityX(-160);
    } else if (this.gameState.cursors.right.isDown) {
      this.gameState.player.setVelocityX(160);
    } else {
      this.gameState.player.setVelocityX(0);
    }
    if (Input.Keyboard.JustDown(this.gameState.cursors.space)) {
      this.fireRepellets();
    }
  }

  gameOver() {
    const endtext = () => {
      this.gameState.active = false;
      this.physics.pause();
      this.gameState.enemyVelocity = 1;
      this.add.text(this.width * 0.5, this.height * 0.5, 'Game Over!', { fontSize: '25px', fill: '#000000' }).setOrigin();
      this.add.text(this.width * 0.5, this.height * 0.55, 'Click to restart', { fontSize: '25px', fill: '#000000' }).setOrigin();
    };

    this.physics.add.collider(this.gameState.enemiesPellets, this.gameState.player, () => {
      this.gameState.enemiesPelletsLoop.destroy();
      endtext();
    });

    this.physics.add.collider(this.gameState.enemies, this.gameState.player, () => {
      endtext();
    });
  }

  resetLevel() {
    this.scene.stop(this.levelKey);
    this.scene.start(this.levelKey);
  }

  levelWin() {
    if (this.numOfTotalEnemies() === 0) {
      this.gameState.active = false;
      this.physics.pause();
      this.gameState.enemyVelocity = 1;
      this.add.text(this.width * 0.5, this.height * 0.5, `You won the ${this.levelKey}!`, { fontSize: '25px', fill: '#000000' }).setOrigin();
      this.add.text(this.width * 0.5, this.height * 0.55, `Click to start ${this.nextLevel}`, { fontSize: '25px', fill: '#000000' }).setOrigin();
      this.goNextLevel();
    }
  }

  goNextLevel() {
    this.input.on('pointerup', () => {
      this.scene.stop(this.levelKey);
      this.scene.start(this.nextLevel);
    });
  }

  levelSetup() {
    this.gameState.active = true;

    this.createPlatform();
    this.createPlayer();
    this.createEnemies();
    this.createColliderPlayerAndPlatform();
    this.createEnemiesPellets();
    this.createRepellets();
    this.createScoreText();
    this.createLevelText();
    this.createCursors();
  }

  create() {

    this.input.on('pointerup', () => {
      if (!this.gameState.active) {
        this.resetLevel();
      }
    });
    this.levelSetup();
    this.fireEnemyPellets();
    this.destroyEnemyPellets();
    this.destroyEnemy();
    this.gameOver();
  }

  update() {

    this.resizeWold();
    if (this.gameState.active) {
      // If the game is active, then players can control Codey
      this.cursorActions();

      // Add logic for winning condition and enemy movements below:
      this.levelWin();
      this.moveEnemy();
    }
  }
}
</script>