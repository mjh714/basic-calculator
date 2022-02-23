try:
    num1 = int(input("Enter first number: "))
except ValueError:
    print("Something went wrong please use numbers only")
    num2 = int(input("Enter second number: "))
except ValueError:
    print("Something went wrong please use numbers only")
    op = str(input("Enter Operator: "))
except:
    print("Something went wrong please use oporators only")

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