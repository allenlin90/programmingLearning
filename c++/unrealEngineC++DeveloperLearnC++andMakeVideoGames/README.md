- [1. Triple X - Write pure C++](#1-triple-x---write-pure-c)
  - [1.1. Your first program](#11-your-first-program)
  - [1.2. Hello World](#12-hello-world)
  - [1.3. Variables](#13-variables)
  - [1.4. const and assigning values](#14-const-and-assigning-values)
  - [1.5. Statements and comments](#15-statements-and-comments)
  - [1.6. Naming and self documenting code](#16-naming-and-self-documenting-code)
  - [1.7. Getting user input](#17-getting-user-input)
  - [1.8. Using if and else in C++](#18-using-if-and-else-in-c)
  - [1.9. Functions](#19-functions)
  - [1.10. Returning data from functions](#110-returning-data-from-functions)
  - [1.11. Function Parameters](#111-function-parameters)
  - [1.12. Comparing values](#112-comparing-values)
  - [1.13. Generating random number ranges](#113-generating-random-number-ranges)

1. The course requires several software to work with. It will take some time and space to install all softwares.
   1. EPIC Game launch installed along with VS 2022 community version (free)
   2. VS Code
   3. Unreal Engine 4xx version (installed by EPIC game launcher)
2. Start VS Code with developer command prompt (similar to CMD and is available after installing VS 2022) by typing `code` to the command prompt.
3. Install `c++` extension from Microsoft in VS Code.

# 1. Triple X - Write pure C++
## 1.1. Your first program
1. Every C++ code has a `main` function. Without the function, the code can't even be built.
    ```cpp
    int main() {
      return 0;
    }
    ```
2. To compile the code, we simple run `cl [outputname]` in the terminal or `g++ [filename] -o [output name]`.
3. To run the compiled program, we can simply type the name of the file at the terminal.
4. Note that there's nothing happens as the program doesn't do anything besides returning a `0` which won't be printed in the terminal as well.
5. Besides, the compiler will ignore the whitespace as the machine doesn't use and read it. The spaces are used for indentation to help human to read.

## 1.2. Hello World
1. Preprocessor directive is
   1. Instruction to the compiler
   2. Used to include a library before compiling
   3. We want it to be at the start of our file
   4. `#` represents preprocessor directive in our code
      ```cpp
      #include <iostream>

      int main()
      {
        std::cout << "Hello, World!";
        return 0;
      }
      ```
2. Code structure
   1. `std` is the namespace
   2. `::` is scope operator
   3. `cout` is "Cout" defined in std namespace
   4. The following string in double qoute is the string that we want to output
3. To end the string and start a new line, we can use `std::endl`. 
    ```cpp
    #include <iostream>

    int main()
    {
      std::cout << "You are a secret agent breaking into a secure server room...";
      std::cout << std::endl;
      std::cout << "Enter the correct code to continue...";
      return 0;
    }
    ```

## 1.3. Variables
1. Variables are used to store data
2. To use variables in c++ you first must declare them in your code
3. By declaring a variable you are reserving space in the computer's memory for it
   1. `int` is the type
   2. `a` is variable name
      ```cpp
      // initialized
      int a = 0;
      ```
4. When a variable has no assigned value, it means the variable is not initialized.
    ```cpp
    #include <iostream>

    int main()
    {
      std::cout << "You are a secret agent breaking into a secure server room...";
      std::cout << std::endl;
      std::cout << "Enter the correct code to continue...";
      std::cout << std::endl;

      int a = 4;
      int b = 4;
      int c = 4;

      int sum = a + b + c;
      int product = a * b * c;

      std::cout << sum << std::endl;
      std::cout << product << std::endl;

      return 0;
    }
    ```

## 1.4. const and assigning values
1. Variables can be changed at runtime.
2. After a variable has been declared, we can assign a new value to it at any point in our code.
3. "A value that is subject to change"
4. We can't assign a value to a variable before the variable has been declared.
5. The compiler will not be aware that the variable exists if you try assigning to it before it's declaration.
6. The compiler will not allow this.
7. In C++, we can use `const` as the keyword for constant
   1. With it, we signal our intentions to ourselves and to anybody who reads our code.
   2. We never want this variable to change it's value after it's declaration.
   3. When the compiler reaches the keyword, it won't allow the constant variable to be modified.

## 1.5. Statements and comments
1. An expression followed by a semicolon is an expression statement.
2. We can use double slashes for single line comment `//`.
3. We can use `/* mutl-line comment */` for multi-line comments.

## 1.6. Naming and self documenting code
1. Important to give your variable good names.
2. Must begin with a letter or an underscore, and it can't start with a number.
3. You must not use a reserved keyword.
4. Reserved keywords are to be used by the C++ language only.
5. Self documenting code
   1. Makes our code easier to read and understand
   2. If we give a variable a good name, we don't have to use a comment to explain what it does.
6. Unreal coding standard
   1. Unreal engine 4 uses an UpperCamelCase naming convention.
      ```cpp
      #include <iostream>

      int main()
      {
        std::cout << "You are a secret agent breaking into a secure server room...";
        std::cout << std::endl;
        std::cout << "Enter the correct code to continue...";
        std::cout << std::endl;

      // Declare 3 number code
        const int CodeA = 4;
        const int CodeB = 4;
        const int CodeC = 4;

        const int sum = CodeA + CodeB + CodeC;
        const int product = CodeA * CodeB * CodeC;

      // Print sum and product to the terminal
        std::cout << std::endl;
        std::cout << "There are 3 numbers in the code" << std::endl;
        std::cout << "The codes add-up to: " << sum << std::endl;
        std::cout << "The codes multiply to give: " << product << std::endl;

        int PlayerGues;

        return 0;
      }
      ```

## 1.7. Getting user input
1. `cout` stands for "character output" while double less than `<<` is insertion operator.
2. On the other hand, we can use `cin` with double greater than `>>` as extraction operator to get user input.
3. We can use the feature to stoer user (player) guess and print the value out.
4. When we give multiple inputs separated with whitespace, C++ code will only take the first one if there's only a variable taking the input.
5. On the other hand, we can declare multiple variables to store user input.
6. In this case, we can pass multiple values separated by whitespaces as arguments.
    ```cpp
    #include <iostream>

    int main()
    {
      std::cout << "You are a secret agent breaking into a secure server room...";
      std::cout << std::endl;
      std::cout << "Enter the correct code to continue...";
      std::cout << std::endl;

    // Declare 3 number code
      const int CodeA = 4;
      const int CodeB = 4;
      const int CodeC = 4;

      const int sum = CodeA + CodeB + CodeC;
      const int product = CodeA * CodeB * CodeC;

    // Print sum and product to the terminal
      std::cout << std::endl;
      std::cout << "There are 3 numbers in the code" << std::endl;
      std::cout << "The codes add-up to: " << sum << std::endl;
      std::cout << "The codes multiply to give: " << product << std::endl;

      int GuessA, GuessB, GuessC;
      std::cin >> GuessA;
      std::cin >> GuessB;
      std::cin >> GuessC;
      std::cout << "You entered: " << GuessA << GuessB << GuessC << std::endl;

      return 0;
    }
    ```
7. In addition, if the user gives any character other than numbers, C++ will convert the value automatically into number `0`. For example, if the user gives `2 3 x`, the result will be `2 3 0`.

## 1.8. Using if and else in C++
```cpp
#include <iostream>

int main()
{
  std::cout << "You are a secret agent breaking into a secure server room...";
  std::cout << std::endl;
  std::cout << "Enter the correct code to continue...";
  std::cout << std::endl;

// Declare 3 number code
  const int CodeA = 4;
  const int CodeB = 4;
  const int CodeC = 4;

  const int CodeSum = CodeA + CodeB + CodeC;
  const int CodeProduct = CodeA * CodeB * CodeC;

 // Print sum and product to the terminal
  std::cout << std::endl;
  std::cout << "There are 3 numbers in the code" << std::endl;
  std::cout << "The codes add-up to: " << CodeSum << std::endl;
  std::cout << "The codes multiply to give: " << CodeProduct << std::endl;

  int GuessA, GuessB, GuessC;
  std::cin >> GuessA;
  std::cin >> GuessB;
  std::cin >> GuessC;
  std::cout << "You entered: " << GuessA << GuessB << GuessC << std::endl;

  int GuessSum = GuessA + GuessB + GuessC;
  int GuessProduct = GuessA * GuessB * GuessC;

  if (GuessSum == CodeSum && GuessProduct == CodeProduct)
  {
    std::cout << "You win!";
  }
  else
  {
    std::cout << "You lose!";
  }

  return 0;
}
```

## 1.9. Functions
1. We can use escape character `\` to print double quotes and give change line character `\n` in the string directly.
2. Function
   1. A function is a group of statements that together, performs a task and is given a name.
   2. Every C++ program must have at least one function `main`.
3. The code is compiled and executed on top down manner.
4. If the function is declared after it is called, the code can be compiled correctly. (This is very different to Javascript. The function can be called in the same context anywhere though it is declared after execution).
```cpp
#include <iostream>

void PrintIntroduction()
{
  std::cout << "You are a secret agent breaking into a secure server room...\n";
  std::cout << "Enter the correct code to continue...\n\n";
}

void PlayGame()
{
  PrintIntroduction();

  // Declare 3 number code
  const int CodeA = 4;
  const int CodeB = 4;
  const int CodeC = 4;

  const int CodeSum = CodeA + CodeB + CodeC;
  const int CodeProduct = CodeA * CodeB * CodeC;

 // Print sum and product to the terminal
  std::cout << "+ There are 3 numbers in the code";
  std::cout << "\n+ The codes add-up to: " << CodeSum;
  std::cout << "\n+ The codes multiply to give: " << CodeProduct << std::endl;

  int GuessA, GuessB, GuessC;
  std::cin >> GuessA;
  std::cin >> GuessB;
  std::cin >> GuessC;
  std::cout << "You entered: " << GuessA << GuessB << GuessC << std::endl;

  int GuessSum = GuessA + GuessB + GuessC;
  int GuessProduct = GuessA * GuessB * GuessC;

  if (GuessSum == CodeSum && GuessProduct == CodeProduct)
  {
    std::cout << "\nYou win!";
  }
  else
  {
    std::cout << "\nYou lose!";
  }
}

int main()
{
  PlayGame();
  return 0;
}
```

## 1.10. Returning data from functions
1. When using `while` loop, the code block executes repeatedly until the condition is not met.
2. We can exit the program by typing <kbd>Ctrl + C<kbd>.
3. As using a `while` loop, we can get into infinite loop if the conditions aren't set up correctly.
4. In this case, if the user gives any input other than numbers, the iteration won't stop as it keeps giving incorrect input without error catch. 
5. In C++, we can use 
   1. `std::cin.clear()` to clear any errors.
   2. `std::cin.ignore()` to discard buffer.
```cpp
#include <iostream>

void PrintIntroduction()
{
  std::cout << "You are a secret agent breaking into a secure server room...\n";
  std::cout << "Enter the correct code to continue...\n\n";
}

bool PlayGame()
{
  PrintIntroduction();

  // Declare 3 number code
  const int CodeA = 4;
  const int CodeB = 4;
  const int CodeC = 4;

  const int CodeSum = CodeA + CodeB + CodeC;
  const int CodeProduct = CodeA * CodeB * CodeC;

 // Print sum and product to the terminal
  std::cout << "+ There are 3 numbers in the code";
  std::cout << "\n+ The codes add-up to: " << CodeSum;
  std::cout << "\n+ The codes multiply to give: " << CodeProduct << std::endl;

  int GuessA, GuessB, GuessC;
  std::cin >> GuessA;
  std::cin >> GuessB;
  std::cin >> GuessC;
  std::cout << "You entered: " << GuessA << GuessB << GuessC << std::endl;

  int GuessSum = GuessA + GuessB + GuessC;
  int GuessProduct = GuessA * GuessB * GuessC;

  if (GuessSum == CodeSum && GuessProduct == CodeProduct)
  {
    std::cout << "\nYou win!";
    return true;
  }
  else
  {
    std::cout << "\nYou lose!";
    return false;
  }
}

int main()
{
  while (LevelDifficulty <= 10)
  {
    bool bLevelComplete = PlayGame();
    std::cin.clear(); // clears any errors
    std::cin.ignore(); // discards the buffer
  }

  return 0;
}
```

## 1.11. Function Parameters
1. We can use double plus sign `++` to increment the variable by 1.
2. Variable scope
   1. A variable declared insides a code block has scope
   2. It is local to where it is declared
   3. Cannot be accessed or used outside of its 'scope'
```cpp
#include <iostream>

void PrintIntroduction(int Difficulty)
{
  std::cout << "You are a secret agent breaking into a level " << Difficulty << " secure server room...\n";
  std::cout << "Enter the correct code to continue...\n\n";
}

bool PlayGame(int Difficulty)
{
  PrintIntroduction(Difficulty);

  // Declare 3 number code
  const int CodeA = 4;
  const int CodeB = 4;
  const int CodeC = 4;

  const int CodeSum = CodeA + CodeB + CodeC;
  const int CodeProduct = CodeA * CodeB * CodeC;

 // Print sum and product to the terminal
  std::cout << "+ There are 3 numbers in the code";
  std::cout << "\n+ The codes add-up to: " << CodeSum;
  std::cout << "\n+ The codes multiply to give: " << CodeProduct << std::endl;

  int GuessA, GuessB, GuessC;
  std::cin >> GuessA;
  std::cin >> GuessB;
  std::cin >> GuessC;
  std::cout << "You entered: " << GuessA << GuessB << GuessC << std::endl;

  int GuessSum = GuessA + GuessB + GuessC;
  int GuessProduct = GuessA * GuessB * GuessC;

  if (GuessSum == CodeSum && GuessProduct == CodeProduct)
  {
    std::cout << "\nYou win!";
    return true;
  }
  else
  {
    std::cout << "\nYou lose!";
    return false;
  }
}

int main()
{
  int LevelDifficulty = 1;
  while (true)
  {
    bool bLevelComplete = PlayGame(LevelDifficulty);
    std::cin.clear(); // clears any errors
    std::cin.ignore(); // discards the buffer

    if (bLevelComplete) 
    {
      // increase the level difficulty
      ++LevelDifficulty;
    }
  }

  return 0;
}
```

## 1.12. Comparing values
1. We can use comparing operators such as greater than or equal to `>=` to check the conditions.
2. To generate random numbers, we can use `rand` which is built-in function to return a number between `0` and `32767`. 

## 1.13. Generating random number ranges
1. Modulus operator `%`
   1. Performs a division but return the remainder.
   2. 9 % 4 = 1
   3. We can use this to map `rand` to our own range.
2. By using the modulus operator and `rand`, we can get the range. 
3. For example, we can get any number between 0 and 9 by giving `rand() % 10`. 
4. Note that than range is 0 to the "modulus" - 1.
5. In this case, since we don't want the product of numbers to be `0`, we can give all random numbers an extra `1`. 
6. Besides, we can include the difficulty by involving the Difficulty as the leveling coefficient.
7. However, the current setting doesn't give a real random number.
8. We need to initiate `rand` with a different seed and it will produce more random results.
9. The best way to do this is based on your computer time. 
10. Use `#include <ctime>`
11. At the start of main add `srand(time(NULL));`
12. Creates new random sequence based on the time of day
