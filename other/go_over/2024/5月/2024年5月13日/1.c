#include <stdio.h>

int main()
{
  float pi = 3.14;
  float r, h;
  printf("请输入半径和高度:>");
  scanf("%f %f", &r, &h);

  // 圆周长
  float Circumference = 2 * pi * r;

  // 圆面积
  float CircleArea = pi * r * r;

  // 圆球表面积
  float Surface_area_of_sphere = 4 * pi * r * r;

  // 圆球体积
  float SphereVolume = (4.0 / 3) * pi * r * r * r;

  // 圆柱体积
  float CylinderVolume = pi * r * r * h;

  printf("圆周长:> %.2f\n", Circumference);
  printf("圆面积:> %.2f\n", CircleArea);
  printf("圆球表面积:> %.2f\n", Surface_area_of_sphere);
  printf("圆球体积:> %.2f\n", SphereVolume);
  printf("圆柱体积:> %.2f\n", CylinderVolume);

  return 0;
}
