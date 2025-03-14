import React, { useRef, useEffect } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width = window.innerWidth * 0.75;
    const height = canvas.height = window.innerHeight * 0.75;
    const gl = canvas.getContext('webgl', { alpha: true }); // Enable alpha channel
    if (!gl) return;

    const mouse = { x: 0, y: 0 };
    const numMetaballs = 20; // Reduced number of metaballs for better performance
    const metaballs = Array.from({ length: numMetaballs }, () => ({
      x: Math.random() * (width - 120) + 60,
      y: Math.random() * (height - 120) + 60,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      r: Math.random() * 60 + 10
    }));

    const vertexShaderSrc = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSrc = `
      precision highp float;
      const float WIDTH = ${width.toFixed(1)};
      const float HEIGHT = ${height.toFixed(1)};
      uniform vec3 metaballs[${numMetaballs}];
      void main() {
        float x = gl_FragCoord.x;
        float y = gl_FragCoord.y;
        float sum = 0.0;
        for (int i = 0; i < ${numMetaballs}; i++) {
          vec3 metaball = metaballs[i];
          float dx = metaball.x - x;
          float dy = metaball.y - y;
          float radius = metaball.z;
          sum += (radius * radius) / (dx * dx + dy * dy);
        }

        // Smoothly blend the metaball color into the transparent background
        float alpha = smoothstep(0.99, 1.0, sum); // Smooth transition
        vec3 color = mix(vec3(x / WIDTH, y / HEIGHT, 1.0), vec3(0, 0, 0), max(0.0, 1.0 - (sum - 0.99) * 100.0));
        gl_FragColor = vec4(color, alpha); // Use alpha for transparency
      }
    `;

    const compileShader = (shaderSource: string, shaderType: number) => {
      const shader = gl.createShader(shaderType);
      if (!shader) throw new Error("Shader creation failed");
      gl.shaderSource(shader, shaderSource);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error("Shader compile failed with: " + gl.getShaderInfoLog(shader));
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!program) throw new Error("Program creation failed");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertexData = new Float32Array([-1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, -1.0]);
    const vertexDataBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

    const positionHandle = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionHandle);
    gl.vertexAttribPointer(positionHandle, 2, gl.FLOAT, false, 2 * 4, 0);

    const metaballsHandle = gl.getUniformLocation(program, 'metaballs');
    if (!metaballsHandle) throw new Error("Could not get uniform location");

    const loop = () => {
      metaballs.forEach(metaball => {
        metaball.x += metaball.vx;
        metaball.y += metaball.vy;
        if (metaball.x < metaball.r || metaball.x > width - metaball.r) metaball.vx *= -1;
        if (metaball.y < metaball.r || metaball.y > height - metaball.r) metaball.vy *= -1;
      });

      const dataToSendToGPU = new Float32Array(3 * numMetaballs);
      metaballs.forEach((mb, i) => {
        const baseIndex = 3 * i;
        dataToSendToGPU[baseIndex] = mb.x;
        dataToSendToGPU[baseIndex + 1] = mb.y;
        dataToSendToGPU[baseIndex + 2] = mb.r;
      });
      gl.uniform3fv(metaballsHandle, dataToSendToGPU);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(loop);
    };

    canvas.onmousemove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    loop();
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', zIndex: -1, position: 'absolute', background: 'none', opacity:'30%' }} />;
};

export default Background;