import sys

stack = []

with open(sys.argv[1], 'r') as f:
    lines = f.readlines()

content = "".join(lines[347:]) # Start from panel-render
for i, char in enumerate(content):
    if char in '([':
        stack.append((char, i))
    elif char in ')]':
        if not stack:
            print(f"Extra closing {char} at {i}")
            continue
        last, idx = stack.pop()
        expected = ')' if last == '(' else ']'
        if char != expected:
            print(f"Mismatch at {i}: expected {expected} for {last} at {idx}, got {char}")

if stack:
    print("Unclosed items:")
    for char, idx in stack:
        print(f"  {char} at {idx}: {content[idx:idx+20]}...")
