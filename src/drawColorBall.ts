(function () {
// 绘制炫彩小球
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

class Ball {
  color: string;
  r: number; // 小球的半径
  dx: number; // 小球在x轴的运动速度/帖
  dy: number; // 小球在y轴的运动速度/帖

  constructor(public x: number, public y: number) {
    this.color = this.getRandomColor();
    // 设置随机半径[1, 100]
    this.r = Math.floor(Math.random() * 100 + 1);
    this.dx = Math.floor(Math.random() * 10) - 5;
    this.dy = Math.floor(Math.random() * 10) - 5;
  }

  getRandomColor(): string {
    let allType = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f';
    let allTypeArr = allType.replace(/\s?/g, '').split(',');
    let color = '#';

    for (let i = 0; i < 6; i++) {
      let idx = Math.floor(Math.random() * allTypeArr.length);
      color += allTypeArr[idx];
    }

    return color;
  }

  render(): void {
    ctx!.beginPath();
    ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx!.fillStyle = this.color;
    ctx!.fill();
  }

  update(): void {
    this.x += this.dx;
    this.y += this.dy;
    this.r -= 0.5;

    // 如果小球的半径小于0，从数组中删除
    if ( this.r <= 0 ) {
      this.remove();  
    } 
  }

  remove(): void {
    for (let i = 0; i < ballArr.length; i++) {
      if (ballArr[i] === this) {
        ballArr.splice(i, 1);
      }     
    }
  }
}

// 小球的数组
const ballArr: Ball[] = [];

// canvas设置鼠标监听
canvas.addEventListener('mousemove', (event) => {
  ballArr.push(new Ball(event.offsetX, event.offsetY));
});

setInterval(() => {
  ctx!.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < ballArr.length; i++) {
    ballArr[i].update();
    
    if (ballArr[i]) {
      ballArr[i].render();
    }
  }
}, 1000 / 60);

})()
