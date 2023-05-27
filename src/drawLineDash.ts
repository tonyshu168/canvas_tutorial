{
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth - 30;
canvas.height = document.documentElement.clientHeight - 30;

ctx!.setLineDash([15, 15]);
ctx?.strokeRect(50, 50, 90, 90);
ctx!.setLineDash([15, 10, 2, 10]);
ctx!.strokeRect(200, 50, 90, 90);
}
