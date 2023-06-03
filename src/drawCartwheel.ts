{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d'),
        image = new Image();

  image.src = '../canvas_tutorial/img/cartwheel.png';
  image.onload = () => {
    let deg = 0; // 旋转度数
    let x = -100; // 位置

    setInterval(() => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      deg += 0.1;
      x += 5;

      // 边界判断
      if (x >= canvas.width + 100) {
        x = -100;
      }

      ctx!.save(); // 备份
      ctx!.translate(x, 300); // 平移，平移后我们的原点为(100, 300)
      ctx!.rotate(deg); // 旋转,因为旋转始终在canvas的原点，所以我们得用translate改变原点。
      // 为了让车轮的中心处于原点，所以我们需要在第一个和第二个参数各为第三和第四个参数的一半然后再加负号
      ctx!.drawImage(image, -100, -100, 200, 200);
      // 恢复
      ctx!.restore();
    }, 1000/60); 
  }
}
