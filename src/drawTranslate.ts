{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d');

  ctx!.save(); // 变形之前先保存之前状态
  ctx!.translate(50, 50);
  ctx!.fillRect(0, 0, 120, 120);

  ctx!.restore(); // 恢复之前状态
  ctx!.fillRect(120, 300, 120, 120);
}
