#version 120

uniform sampler2D baseTexture;

void main() {
	gl_FragColor = texture2D(baseTexture, gl_TexCoord[0].xy);
}