(function () {
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d')!;

class Rect {
  constructor ( public x: number,
    public y: number,
    public w: number,
    public h: number,
    public color: string
  ) {}

  update() {
    this.x += 2;

    if (this.x > 600) {
      this.x = -200;
    }     
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx!.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

const rect01 = new Rect(-100, 200, 100, 100, 'purple');
const rect02 = new Rect(-100, 400, 100, 100, 'pink');

setInterval(() => {
  ctx!.clearRect(0, 0, 600, 600);

  rect01.update();
  rect02.update();

  rect01.render(ctx);
  rect02.render(ctx);
}, 10);
})()
