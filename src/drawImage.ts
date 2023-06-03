{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d'),
        image:HTMLImageElement = new Image();
  
  image.src = '../canvas_tutorial/img/Snipaste.png';

  image.onload = () => {
    // ctx!.drawImage(image, 100, 100);
    // ctx!.drawImage(image, 100, 100, 200, 200);
    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx!.drawImage(image, 100, 300);
    ctx!.drawImage(image, 100, 100, 200, 200, 100, 100, 200, 200);
  }
}
