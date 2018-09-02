#version 330 core

layout (location = 0) in vec3 location;
layout (location = 1) in vec3 color;
layout (location = 2) in vec2 texCoor;

out vec3 ourColor;
out vec2 TexCoord;

void main()
{
	gl_Position = vec4(location, 1.0f);
	ourColor = color;
	TexCoord = vec2(texCoor.x, 1.0 -  texCoor.y);
}