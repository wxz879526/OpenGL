#version 330 core
out vec4 FragColor1;
in vec3 VertexColor;
in vec2 TexCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
	FragColor1 = mix(texture(texture1, TexCoord), texture(texture2, TexCoord), 0.2);
}