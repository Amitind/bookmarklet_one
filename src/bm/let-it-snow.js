javascript: (() => {
	const math = Math;
	const random = math.random;
	const document = window.document;
	const now = Date.now;

	class Timer {
		constructor(duration, start = true) {
			this._startTime = now();
			this._paused = true;
			this._pauseTime = now();
			this.duration = duration;
			if (start) this.start();
		}
		get elapsedTime() {
			return this.isPaused
				? this._pauseTime - this._startTime
				: now() - this._startTime;
		}
		get remainingTime() {
			return math.max(0, this.duration - this.elapsedTime);
		}
		get isPaused() {
			return this._paused;
		}
		get isComplete() {
			return this.elapsedTime >= this.duration;
		}
		start() {
			this._startTime = now() - this.elapsedTime;
			this._paused = false;
			return this;
		}
		reset() {
			this._pauseTime = this._startTime = now();
			return this;
		}
		pause() {
			this._paused = true;
			this._pauseTime = now();
			return this;
		}
		stop() {
			this._paused = true;
			return this;
		}
	}

	// Canvas setup
	const canvas = document.createElement('canvas');
	const style = canvas.style;
	style.position = 'fixed';
	style.left = '0';
	style.top = '0';
	style.width = '100vw';
	style.height = '100vh';
	style.zIndex = '100000';
	style.pointerEvents = 'none';
	document.body.insertBefore(canvas, document.body.children[0]);

	const ctx = canvas.getContext('2d');
	const particleCount = 300;
	const baseSpeed = 5e-4;
	const margin = 20;

	let width = (canvas.width = innerWidth);
	let height = (canvas.height = innerHeight);
	let maxHeight = height + margin;
	let maxWidth = width + margin;

	const particleSize = 15.2;
	const glowCanvas = document.createElement('canvas');
	const glowCtx = glowCanvas.getContext('2d');
	const gradient = glowCtx.createRadialGradient(7.6, 7.6, 0, 7.6, 7.6, 7.6);
	gradient.addColorStop(0, 'hsla(255, 255%, 255%, 1)');
	gradient.addColorStop(1, 'hsla(255, 255%, 255%, 0)');
	glowCtx.fillStyle = gradient;
	glowCtx.fillRect(0, 0, particleSize, particleSize);

	let animationTimer = new Timer(0, true);
	let particles = [];
	let globalTimer = new Timer(0, true);

	class Particle {
		constructor() {
			this.x = random() * (width + margin);
			this.y = random() * height;
			this.size = 1 * (3 * random() + 0.8);
			this.speed =
				0.1 * math.pow(this.size, 2.5) * 50 * (2 * random() + 1);
			this.speed = this.speed < 65 ? 65 : this.speed;
			this.scale = this.size / 7.6;
			this.distanceSquared = this.speed * this.speed;
			this.angle = (random() * math.PI) / 1.3;
			this.glow = 15 * this.size;
			this.vx = 0;
			this.vy = 0;
		}
		draw() {
			const angle = math.atan(this.vx / this.speed);
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(-angle);
			ctx.scale(
				this.scale,
				this.scale * math.max(1, math.pow(this.vy, 0.7) / 15)
			);
			ctx.drawImage(glowCanvas, -particleSize / 2, -particleSize / 2);
			ctx.restore();
		}
	}

	function initializeParticles() {
		particles = [];
		for (let i = 0; i < particleCount; i++) {
			particles.push(new Particle());
		}
	}

	function resizeCanvas() {
		canvas.width = width = innerWidth;
		canvas.height = height = innerHeight;
		maxHeight = height + margin;
		maxWidth = width + margin;
		initializeParticles();
	}

	function animate() {
		ctx.clearRect(0, 0, width, height);
		ctx.fill();
		requestAnimationFrame(animate);
		const deltaTime = 0.001 * animationTimer.elapsedTime;
		animationTimer.reset();
		const globalTime = globalTimer.elapsedTime * baseSpeed;
		for (let i = 0; i < particles.length; i++) {
			const particle = particles[i];
			particle.vx = math.sin(globalTime + particle.angle) * particle.glow;
			particle.vy = math.sqrt(
				particle.vx * particle.vx + particle.distanceSquared
			);
			particle.y += particle.speed * deltaTime;
			particle.x += particle.vx * deltaTime;
			if (particle.y > maxHeight) particle.y = -margin;
			if (particle.x > maxWidth) particle.x = -margin;
			if (particle.x < -margin) particle.x = maxWidth;
			particle.draw();
		}
	}

	initializeParticles();
	document.addEventListener(
		'visibilitychange',
		() => setTimeout(resizeCanvas, 100),
		false
	);
	document.addEventListener('resize', resizeCanvas, false);
	animate();
})();
