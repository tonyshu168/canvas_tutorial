{
  const canvas = document.getElementById('canvas') as HTMLCanvasElement,
        ctx = canvas.getContext('2d');
  
  ctx!.fillStyle = 'skyblue';
  ctx!.fillRect(100, 100, 100, 100);
  ctx!.globalCompositeOperation = 'destination-over'; // 让rect在上面 
  ctx!.fillStyle = 'deeppink';
  ctx!.beginPath();
  ctx!.arc(200, 200, 60, 0, 7, false);
  ctx!.fill();
}
