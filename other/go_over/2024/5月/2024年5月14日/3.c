#include <stdio.h>

int main()
{
  int i, j, n = 10, arr[100][100];

  for (i = 0; i < n; i++)
  {
    arr[i][0] = 1;
    for (j = 1; j <= i; j++)
    {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }

  for (i = 0; i < n; i++)
  {
    for (j = 0; j <= i; j++)
    {
      printf("%d ", arr[i][j]);
    }
    printf("\n");
  }
  system("pause");
  return 0;
}