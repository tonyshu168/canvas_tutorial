{
  function randColor() {
    const r = (Math.random() * 256) | 0;
    const g = (Math.random() * 256) | 0;
    const b = (Math.random() * 256) | 0;
    const opacity = 1;

    return `rgba(${r},${g},${b}, ${opacity})`;
  }

  /**
   *
   * params canvas
   * params progress: 加载进度 
   */
  function drawProgress(canvas: HTMLCanvasElement, progress: number) {
    const ctx = canvas.getContext('2d');

    ctx!.lineWidth = 10;
    ctx!.fillStyle = randColor();
    ctx!.strokeStyle = randColor();
    ctx!.font = '20px SimHei';
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    ctx!.beginPath();
    
    const startAngle = -Math.PI / 2; // -90度
    const endAngle = (-90 + 360 * progress / 100) * Math.PI / 180;

    ctx!.arc(200, 200, 60, startAngle, endAngle, false);
    ctx!.stroke();

    const txt = progress + '%',
          txtWidth = ctx!.measureText(txt).width;

    ctx!.fillText(txt, 200 - txtWidth / 2, 200 + 10);
  }

  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d');

  let progress = 0;
  const timer = setInterval(() => {
    progress += 5;

    drawProgress(canvas, progress);


    if (progress >= 100) {
      clearInterval(timer);
    }
  }, 50);
}
