n = input()

def n(i):
    print(i)
    if (i == 1):
        return
    if (n % 2 == 1):
        n(i/2)
    else:
        n(i*3+1)