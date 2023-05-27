{
const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

ctx!.font = '30px 微软雅黑';
ctx!.fillText('您好，世界！', 200, 100);
ctx!.textAlign = 'left';

ctx!.font = '30px 微软雅黑';
ctx!.textAlign = 'right';
ctx!.fillText('您好，世界!', 200, 150);

ctx!.font = '30px 微软雅黑';
ctx!.textAlign = 'center';
ctx!.fillText('您好，世界！', 200, 200);

ctx!.font = '30px 微软雅黑';
ctx!.textAlign = 'start';
ctx!.fillText('您好，世界！', 200, 250);

ctx!.font = '30px 微软雅黑';
ctx!.textAlign = 'end';
ctx!.fillText('您好，世界！', 200, 300);

}
