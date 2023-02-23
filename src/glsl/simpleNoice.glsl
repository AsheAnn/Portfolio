#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

// The noise function
float noise(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898,6.233))) * 43758.5453);
}

// The fragment shader
void main() {
    vec2 uv = gl_FragCoord.xy / ver2(2560.0 , 1080.0); // adjust resolution here
    float noiseVal = noise(uv * 20.0); // adjust frequency here
    gl_FragColor = vec4(vec3(noiseVal), 1.0);
}
