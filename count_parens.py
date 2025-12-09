import sys

with open(sys.argv[1], 'r') as f:
    lines = f.readlines()

content = "".join(lines[347:]) # Start from panel-render
balance = 0
for i, char in enumerate(content):
    if char == '(':
        balance += 1
    elif char == ')':
        balance -= 1
    elif char == '[':
        balance += 1000 # Different weight to detect mixing? No, just track balance
    elif char == ']':
        balance -= 1000

    if balance < 0:
        print(f"Negative balance at char {i}: {content[i-20:i+1]}")
        break

print(f"Final balance: {balance}")
