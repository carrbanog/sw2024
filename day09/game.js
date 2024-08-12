const canvas = document.getElementById('pachinkoCanvas');
const ctx = canvas.getContext('2d');

// 공과 핀의 기본 속성 정의
const ballRadius = 5;
const pegRadius = 3;
const pegs = [];
const balls = [];
const rows = 10;
const cols = 8;
const pegSpacingX = canvas.width / cols;
const pegSpacingY = canvas.height / (rows + 1);

// 핀 배치
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let offsetX = (row % 2 === 0) ? pegSpacingX / 2 : 0;
        let x = col * pegSpacingX + offsetX;
        let y = row * pegSpacingY + pegSpacingY;
        pegs.push({ x, y });
    }
}

// 공 객체 정의
class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = 2;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.dy += 0.05; // 중력 효과

        // 벽에 부딪히면 반사
        if (this.x + ballRadius > canvas.width || this.x - ballRadius < 0) {
            this.dx = -this.dx;
        }

        // 핀에 부딪히면 방향 변경
        pegs.forEach(peg => {
            let dx = this.x - peg.x;
            let dy = this.y - peg.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < ballRadius + pegRadius) {
                this.dx = -this.dx;
                this.dy = -this.dy;
            }
        });

        // 바닥에 도달하면 정지
        if (this.y + ballRadius > canvas.height) {
            this.dy = 0;
            this.dx = 0;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
    }
}

// 마우스 클릭 시 공 생성
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    balls.push(new Ball(mouseX, mouseY));
});

// 애니메이션 루프
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 핀 그리기
    pegs.forEach(peg => {
        ctx.beginPath();
        ctx.arc(peg.x, peg.y, pegRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.closePath();
    });

    // 공 업데이트 및 그리기
    balls.forEach(ball => {
        ball.update();
        ball.draw();
    });

    requestAnimationFrame(draw);
}

draw();
