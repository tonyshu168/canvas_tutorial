const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      ctx = canvas.getContext('2d');

ctx!.fillStyle = 'green';
ctx!.fillRect(100,  100, 100, 50);

ctx!.strokeStyle = 'red';
ctx!.strokeRect(300, 100, 100, 100)

