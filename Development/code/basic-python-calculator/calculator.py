num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
op = str(input("Enter Operator: "))

if op == '+':
    print('The sum is ' + str(num1 + num2))
elif op == '-':
    print("The difference is " + str(num1 - num2))
elif op == '*':
    print("The product is " + str(num1 * num2))
elif op == '/':
    print("The division is " + str(num1 / num2))
else:
    print('Invalid operator')