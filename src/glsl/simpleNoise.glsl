#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 uResolution;
uniform float uGrainAmount;
uniform float uGrainSize;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9908, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = gl_FragCoord.xy / vec3(1.0, 0.3, 0.3) * 7;

    float noise = 0.0;
    float grainSize = uGrainSize / uResolution.y;
    for (float i = -grainSize; i <= grainSize; i += grainSize) {
        for (float j = -grainSize; j <= grainSize; j += grainSize) {
            vec2 offset = vec2(i, j);
            noise += rand(uv + offset) / 4.0;
        }
    }

    noise = (noise - 0.5) * uGrainAmount;

    gl_FragColor = vec4(vec3(noise), 1.0);
}
