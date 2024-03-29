def longestCommonPrefix(strs):
    if not(strs): return ""

    pref = ""
    for s in zip(*strs):
        # print("----------------", s) => ---------------- ('f', 'f', 'f'), ---------------- ('l', 'l', 'l'), ---------------- ('o', 'o', 'i'),
        if len(set(s)) != 1: return pref
        pref += s[0]
    return pref
        

""" 
printing resultant values 
print ("The zipped result is : ",end="")
print (longestCommonPrefix(["flower","flow","flight"]))
"""
