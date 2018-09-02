#version 330 core

in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

uniform sampler2D ourTexure1;
uniform sampler2D ourTexure2;

void main()
{
	color = mix(texture(ourTexure1,TexCoord), texture(ourTexure2, TexCoord), 0.2);
}