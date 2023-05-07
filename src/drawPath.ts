(function() {
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

ctx!.beginPath();
ctx!.moveTo(100, 100);
ctx!.lineTo(200, 200);
ctx!.lineTo(400, 180);
ctx!.lineTo(380, 50);

ctx!.closePath();

ctx!.strokeStyle = '#f00';
ctx!.stroke();
ctx!.fillStyle = 'orange';
ctx!.fill();
})()
