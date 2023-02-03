def minimumWaitingTime(queries):
    sortedList = sorted(queries)
    sum = 0
    waitT = 0
    fSum=0
    i = 0
    while i< len(sortedList):
        queries[i]= sum
        sum += sortedList[i]
        i+=1
    i=0
    while i<len(queries):
        fSum += queries[i]
        i+=1
    
    return fSum

print(minimumWaitingTime([3, 2, 1, 2, 6]))