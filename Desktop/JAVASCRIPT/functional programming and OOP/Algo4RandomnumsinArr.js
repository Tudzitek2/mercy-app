const points = [40, 100, 1, 5, 25, 10];
let i, j, k;
for (i = points.length - 1; i > 0; i--)
    {
        k = Math.floor(Math.random() * (i + 1))
        j = points[i]
        points[i] = points[k]
        points[k] = j
    }