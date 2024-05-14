#include <stdio.h>

int main()
{
  int n, m;
  scanf("%d%d", &n, &m);

  if (n < m)
  {
    int tmp = n;
    n = m;
    m = tmp;
  }
  int total = n * m;

  int r = -1;
  while (m != 0)
  {
    r = n % m;
    n = m;
    m = r;
  }
  printf("最大公约数为 %d\n", n);
  printf("最小公倍数为 %d\n", total / n);
  system("pause");
  return 0;
}
