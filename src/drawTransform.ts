{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d');

  ctx!.fillRect(0, 0, 150, 150);
  ctx!.save();

  ctx!.fillStyle = '#09f';
  ctx!.fillRect(15, 15, 120, 120);

  ctx!.save();
  ctx!.fillStyle = '#fff';
  ctx!.globalAlpha = 0.5;
  ctx!.fillRect(30, 30, 90, 90);

  ctx!.restore(); // 重新加载之前的颜色状态
  ctx!.fillRect(45, 45, 60, 60);

  ctx?.restore(); // 加载默认颜色配置
  ctx!.fillRect(60, 60, 30, 30);
}
