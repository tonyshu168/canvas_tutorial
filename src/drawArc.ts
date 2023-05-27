(function() {
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

ctx!.beginPath();
ctx!.arc(200, 200, 100, 0, 2 * Math.PI, false);
ctx!.stroke();
})()
