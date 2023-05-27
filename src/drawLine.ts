{
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

// 绘制第一条线
ctx!.beginPath();
ctx!.moveTo(50, 50);
ctx!.lineTo(100, 100);
ctx!.lineTo(150, 50);
ctx!.lineWidth = 5;
ctx!.lineCap = 'butt';
ctx!.strokeStyle = 'blue';
ctx!.stroke();

// 绘制第二条线
ctx!.beginPath();
ctx!.moveTo(50, 120);
ctx!.lineTo(100, 170);
ctx!.lineTo(150, 120);
ctx!.lineWidth = 8;
ctx!.lineCap = 'round';
ctx!.strokeStyle = 'green';
ctx!.stroke();

// 绘制第三条线
ctx!.beginPath();
ctx!.moveTo(50, 190);
ctx!.lineTo(100, 240);
ctx!.lineTo(150, 190);
ctx!.lineWidth = 10;
ctx!.lineCap = 'square';
ctx!.strokeStyle = 'red';
ctx!.stroke();

// lineCap
ctx!.beginPath();
ctx!.moveTo(170, 50);
ctx!.lineTo(170, 100);
ctx!.lineWidth = 5;
ctx!.lineCap = 'butt';
ctx!.strokeStyle = 'blue';
ctx!.stroke();

ctx!.beginPath();
ctx!.moveTo(190, 50);
ctx!.lineTo(190, 100);
ctx!.lineWidth = 8;
ctx!.lineCap = 'round';
ctx!.strokeStyle = 'green';
ctx!.stroke();

ctx!.beginPath();
ctx!.moveTo(210, 50);
ctx!.lineTo(210, 100);
ctx!.lineWidth = 10;
ctx!.lineCap = 'square';
ctx!.strokeStyle = 'red';
ctx!.stroke();
}
