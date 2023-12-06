function criarCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  document.body.appendChild(canvas);

  return canvas.getContext("2d");
}

function desenharQuadrado(ctx, x, y, largura, altura) {
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, largura, altura);
}

function desenharCirculo(ctx, x, y, raio) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, raio, 0, 2 * Math.PI);
  ctx.fill();
}

const ctx = criarCanvas();

desenharQuadrado(ctx, 10, 10, 100, 100);
desenharCirculo(ctx, 250, 250, 100);//