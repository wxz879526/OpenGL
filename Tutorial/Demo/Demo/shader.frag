#version 330 core
out vec4 FragColor1;
in vec3 vertexColor;
void main()
{
	FragColor1 = vec4(vertexColor, 1.0f);
}