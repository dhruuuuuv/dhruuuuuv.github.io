last_elem :: [a] -> a
last_elem [] = []
last_elem xs = head $ reverse xs
