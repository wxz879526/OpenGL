#pragma once

#define GLEW_STATIC
#include <GL/glew.h>


#include <GLFW/glfw3.h>

class Shader
{
public:
	GLuint Program;
	Shader(const GLchar *vertexPath, const GLchar *fragmentPath);

	void Use();
};

