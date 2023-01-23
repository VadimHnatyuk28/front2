import numpy as np
from python_tsp.exact import  solve_tsp_dynamic_programming

distance_matrix = np.array([[1.0, 29.5, 53.5, 41.3, 51.7],
                            [29.6, 1.0, 24.5, 62.6, 23.7],
                            [53.2, 24.5, 1.0, 86.2, 38.1],
                            [41.3, 62.5, 86.5, 1.0, 84.7],
                            [51.7, 26.1, 38.2, 84.7, 1.0]])



path,distance = solve_tsp_dynamic_programming(distance_matrix)

print(path,distance)