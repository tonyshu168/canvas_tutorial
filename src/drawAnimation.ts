(function() {
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

ctx!.fillStyle = 'blue';
let left = -200; // 初始信号量
setInterval(() => {
  ctx!.clearRect(0, 0, 600, 600);
  left += 5; // 右移

  if (left > 600 ) {
    left = -200;
  }

  ctx!.fillRect(left, 100, 200, 200 );
}, 50);
})()
