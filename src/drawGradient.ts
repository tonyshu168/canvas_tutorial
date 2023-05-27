{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d');

  const linerGradient = ctx!.createLinearGradient(10, 10, 100, 100);
  linerGradient.addColorStop(0, 'red');
  linerGradient.addColorStop(.5, 'blue');
  linerGradient.addColorStop(.8, 'yellow');
  linerGradient.addColorStop(1, 'green');
  ctx!.fillStyle = linerGradient;
  ctx!.fillRect(10, 10, 100, 100);

  const radialGradient = ctx!.createRadialGradient(100,300, 0, 100, 300, 100);
  radialGradient.addColorStop(0, 'red');
  radialGradient.addColorStop(1, 'purple');
  ctx!.fillStyle = radialGradient;
  ctx!.arc(100, 300, 100, 0, Math.PI * 2, false);
  ctx!.fill();
}
