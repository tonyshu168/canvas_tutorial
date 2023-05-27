{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d');

  ctx!.shadowOffsetX = 2; // 阴影左右偏离的距离
  ctx!.shadowOffsetY = 2; // 阴影上下偏离的距离
  ctx!.shadowBlur = 1; // 模糊状态
  ctx!.shadowColor = 'pink'; // 阴影颜色
  ctx!.font = '30px 宋体';
  ctx!.fillStyle = 'green';
  ctx!.fillText('您好，世界！', 100, 100);
}
