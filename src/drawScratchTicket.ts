{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d');
  const div = document.createElement('div');
  div.style.border = '1px solid #000';
  div.style.width = '250px';
  div.style.height = '60px';
  div.style.fontSize = '40px';
  div.style.lineHeight = '60px';
  div.style.textAlign = 'center';
  div.style.position = 'relative';
  div.style.userSelect = 'none';
  
  canvas.style.position = 'absolute';
  canvas.style.left = '0';
  canvas.style.top = '0';

  div.className = 'wrapper';
  div.textContent = '特等奖';
  canvas.width = 250, canvas.height = 60;
  canvas.parentNode?.replaceChild(div, canvas);
  div.appendChild(canvas); 

  ctx!.fillStyle = '#333';
  ctx!.fillRect(0, 0, 250, 60);
  // 设置新画上的元素，实际上就是擦除之前的元素
  ctx!.globalCompositeOperation = 'destination-out';

  const func = (event: any) => {
    const { offsetX, offsetY } = event;
    ctx!.beginPath();
    ctx!.arc(offsetX, offsetY, 10, 0, Math.PI * 2, false);
    ctx!.fill();
  }

  canvas.addEventListener('mousedown', function() {
    canvas.addEventListener('mousemove', func);
  });
  canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', func);
  });
}
