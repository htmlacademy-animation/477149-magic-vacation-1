import Animation from "../animation/animation";
import Scene2D from "../animation/scene-2d";
import easing from '../animation/utils.js';

const IMAGES_URLS = Object.freeze({
  key: "./img/module-4/lose-images/key.png",
  crocodile: "./img/module-4/lose-images/crocodile.png",
  drop: "./img/module-4/lose-images/drop.png",
  flamingo: "./img/module-4/lose-images/flamingo.png",
  leaf: "./img/module-4/lose-images/leaf.png",
  saturn: "./img/module-4/lose-images/saturn.png",
  snowflake: "./img/module-4/lose-images/snowflake.png",
  watermelon: "./img/module-4/lose-images/watermelon.png",
});

const OBJECTS = Object.freeze({
  key: {
    imageId: "key",
    x: 50,
    y: 58,
    size: 18,
    opacity: 0,
    transforms: { scaleX: 0.8, scaleY: 0.8 },
  },
  flamingo: {
    imageId: "flamingo",
    x: 50,
    y: 58,
    size: 16,
    opacity: 0,
    transforms: {},
  },
  watermelon: {
    imageId: "watermelon",
    x: 50,
    y: 58,
    size: 16,
    opacity: 0,
    transforms: {},
  },
  snowflake: {
    imageId: "snowflake",
    x: 50,
    y: 58,
    size: 12,
    opacity: 0,
    transforms: {},
  },
  saturn: {
    imageId: "saturn",
    x: 50,
    y: 58,
    size: 16,
    opacity: 0,
    transforms: {},
  },
  leaf: {
    imageId: "leaf",
    x: 50,
    y: 58,
    size: 20,
    opacity: 0,
    transforms: {},
  },
  crocodile: {
    imageId: "crocodile",
    x: 50,
    y: 58,
    size: 80,
    opacity: 1,
    transforms: {
      translateX: 80,
      translateY: 20,
    },
  },
  drop: {
    imageId: "drop",
    x: 49,
    y: 68,
    size: 4,
    opacity: 0,
    transforms: {
      translateX: 2,
      scaleX: 1,
      scaleY: 1,
    },
  },
});

export default class SceneCrocodile extends Scene2D {
  constructor() {
    const canvas = document.getElementById("crocodile-scene");
    super({
      canvas,
      objects: OBJECTS,
      imagesUrls: IMAGES_URLS,
    });

    this.dropAnimations = [];
    this.initDropAnimation = this.initDropAnimation.bind(this);

    this.afterInit = () => {
      this.objects.crocodile.before = this.drawMask.bind(this);
      this.objects.crocodile.after = this.restoreContext.bind(this);
    };

    this.initEventListeners();
    this.initObjects(OBJECTS);
    this.initLocals();
    this.start();
    this.updateSize();
  }

  initEventListeners() {
    window.addEventListener("resize", this.updateSize.bind(this));
  }

  initAnimations() {
    this.animations.push(
      new Animation({
        func: () => this.drawScene(),
        duration: "infinite",
        fps: 60,
      })
    );

    this.initKeyAnimations();
    this.initFlamingoAnimations();
    this.initWatermelonAnimation();
    this.initSnowFlakeAnimation();
    this.initSaturnAnimation();
    this.initLeafAnimation();
    this.initCrocodileAnimation();
  }

  initKeyAnimations() {
    this.animations.push(
      new Animation({
        func: (progress) => {
          this.objects.key.opacity = progress;
          this.objects.key.transforms.scaleX = 0.8 + 0.2 * progress;
          this.objects.key.transforms.scaleY = 0.8 + 0.2 * progress;
        },
        duration: 187,
        delay: 0,
        easing: easing.easeInOutSinus,
      })
    );
  }

  initFlamingoAnimations() {
    this.animations.push(
      new Animation({
        func: (progress) => {
          this.objects.flamingo.opacity = progress;
          this.objects.flamingo.transforms.translateX = -25 * progress;
          this.objects.flamingo.transforms.translateY = -5 * progress;
          this.objects.flamingo.transforms.rotate = (1 - progress) * 60;
        },
        duration: 617,
        delay: 100,
        easing: easing.easeOutCubic,
      }),
      new Animation({
        func: (progress) => {
          this.objects.flamingo.transforms.translateY = -5 + 80 * progress;
        },
        duration: 583,
        delay: 717,
        easing: easing.easeInCubic,
      })
    );
  }

  initWatermelonAnimation() {
    this.animations.push(
      new Animation({
        func: (progress) => {
          this.objects.watermelon.opacity = progress;
          this.objects.watermelon.transforms.translateX = -40 * progress;
          this.objects.watermelon.transforms.translateY = 20 * progress;
          this.objects.watermelon.transforms.rotate = (1 - progress) * 60;
        },
        duration: 617,
        delay: 100,
        easing: easing.easeOutCubic,
      }),
      new Animation({
        func: (progress) => {
          this.objects.watermelon.transforms.translateY = 20 + 80 * progress;
        },
        duration: 583,
        delay: 717,
        easing: easing.easeInCubic,
      })
    );
  }

  initSnowFlakeAnimation() {
    this.animations.push(
      new Animation({
        func: (progress) => {
          this.objects.snowflake.opacity = progress;
          this.objects.snowflake.transforms.translateX = 22 * progress;
          this.objects.snowflake.transforms.translateY = 6 * progress;
          this.objects.snowflake.transforms.rotate = (1 - progress) * -60;
        },
        duration: 617,
        delay: 100,
        easing: easing.easeOutCubic,
      }),
      new Animation({
        func: (progress) => {
          this.objects.snowflake.transforms.translateY = 6 + 80 * progress;
        },
        duration: 583,
        delay: 717,
        easing: easing.easeInCubic,
      })
    );
  }

  initSaturnAnimation() {
    this.animations.push(
      new Animation({
        func: (progress) => {
          this.objects.saturn.opacity = progress;
          this.objects.saturn.transforms.translateX = 36 * progress;
          this.objects.saturn.transforms.translateY = 22 * progress;
          this.objects.saturn.transforms.rotate = (1 - progress) * 50;
        },
        duration: 617,
        delay: 100,
        easing:easing. easeOutCubic,
      }),
      new Animation({
        func: (progress) => {
          this.objects.saturn.transforms.translateY = 22 + 80 * progress;
        },
        duration: 583,
        delay: 717,
        easing: easing.easeInCubic,
      })
    );
  }

  initLeafAnimation() {
    this.animations.push(
      new Animation({
        func: (progress) => {
          this.objects.leaf.opacity = progress;
          this.objects.leaf.transforms.translateX = 40 * progress;
          this.objects.leaf.transforms.translateY = -10 * progress;
          this.objects.leaf.transforms.rotate = (1 - progress) * -40;
        },
        duration: 617,
        delay: 100,
        easing: easing.easeOutCubic,
      }),
      new Animation({
        func: (progress) => {
          this.objects.leaf.transforms.translateY = -10 + 80 * progress;
        },
        duration: 583,
        delay: 717,
        easing: easing.easeInCubic,
      })
    );
  }

  initCrocodileAnimation() {
    this.animations.push(new Animation({
        func: (progress) => {
          this.objects.crocodile.transforms.translateX = 80 * (1 - progress);
          this.objects.crocodile.transforms.translateY = 6 - 20 * (1 - progress);
          this.objects.crocodile.transforms.rotate = (1 - progress) * 15;
        },
        callback: () => this.startDropAnimation(),
        duration: 600,
        delay: 683,
        easing: easing.easeInOutSinus,
      })
    );
  }

  startDropAnimation() {
    this.dropAnimations = []

    this.initDropAnimation();

    this.dropAnimations.forEach((animation) => {
      animation.start();
    });

    this.drawScene();
  }

  initDropAnimation() {
    this.dropAnimations.push(
      new Animation({
        func: (progress) => {
          this.objects.drop.opacity = progress;
          this.objects.drop.transforms.translateY = (1 - progress) * -2;
          this.objects.drop.transforms.scaleX = progress;
          this.objects.drop.transforms.scaleY = progress;
          this.objects.drop.transforms.translateX = 1 - progress * 2;
        },
        duration: 600,
        delay: 0,
        easing: easing.easeInOutSinus,
      }),
      new Animation({
        func: (progress) => {
          this.objects.drop.transforms.translateY = progress * 10;
        },
        duration: 600,
        delay: 600,
        easing: easing.easeInOutSinus,
      }),
      new Animation({
        func: (progress) => {
          this.objects.drop.opacity = 1 - progress;
        },
        duration: 500,
        delay: 800,
        easing: easing.easeInOutSinus,
        callback: () => {
          setTimeout(() => this.startDropAnimation(), 500)
        }
      })
    );
  }

  drawMask() {
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.arc(this.size / 2, (this.size * 32) / 62, this.size / 11, (-90 * Math.PI) / 180, (48 * Math.PI) / 180, false);
    this.ctx.lineTo((this.size * 14) / 22, this.size);
    this.ctx.lineTo(0, this.size);
    this.ctx.lineTo(0, 0);
    this.ctx.closePath();

    this.ctx.clip();
  }

  restoreContext() {
    this.ctx.restore();
  }
}
