(function() {
// 绘制小球连线
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');
      
canvas.width = document.documentElement.clientWidth - 30;
canvas.height = document.documentElement.clientHeight - 30;

class Ball {
  x: number = Math.floor(Math.random() * canvas.width);
  y: number = Math.floor(Math.random() * canvas.height);
  r: number = 10;
  color: string = 'gray';
  dx: number = Math.floor(Math.random() * 10) - 5;
  dy: number = Math.floor(Math.random() * 10) - 5;

  constructor() {
    ballArr.push(this);    
  }

  render() {
    ctx!.beginPath();
    ctx!.globalAlpha = 1;
    ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx!.fillStyle = this.color;
    ctx!.fill();
  }

  update() {
    // 更新x
    this.x += this.dx;

    // 纠正x的位置，小球必须完整显示在canvas中
    if (this.x <= this.r) {
      this.x = this.r;
    }
    else if (this.x >= canvas.width - this.r) {
      this.x = canvas.width - this.r; 
    }
    //更新y
    this.y += this.dy;
    // 纠正x的位置，小球必须完整显示在canvas中 
    if (this.y <= this.r) {
      this.y = this.r;
    }
    else if (this.y >= canvas.height - this.r) {
      this.y = canvas.height - this.r;
    }

    // 碰壁检测
    if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
      this.dx *= -1;
    }
    if (this.y + this.r >= canvas.height || this.y - this.r <= 0) {
      this.dy *= -1;
    }
  }
}

// 小球数组  
const ballArr: Ball[] = [];

// 创建20个小球
for (let i = 0; i < 20; i++) {
  new Ball();
}

setInterval(() => {
  const ballLen = ballArr.length;
  ctx!.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < ballLen; i++) {
    ballArr[i].render();
    ballArr[i].update();
  }

  // 画线逻辑
  for (let i = 0; i < ballLen; i++) {
    for (let j = 0; j < ballLen; j++) {
      const distance = Math.sqrt(Math.pow((ballArr[i].x - ballArr[j].x), 2) + Math.pow((ballArr[i].y -ballArr[j].y), 2));
      
      if (distance <= 150) {
        ctx!.strokeStyle = '#000';
        ctx!.beginPath();
        // 线的透明度，根据当前已经连线的小球的距离进行线的透明度设置
        // 距离越近透明度越大，否则透明度越小
        ctx!.globalAlpha = 1 - distance / 150;
        ctx!.moveTo(ballArr[i].x, ballArr[i].y);
        ctx!.lineTo(ballArr[j].x, ballArr[j].y);
        ctx!.closePath();
        ctx!.stroke();
      }
    }
  }
}, 1000 / 60);

})()

