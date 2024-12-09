<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f8ff;
        }

        .container {
            text-align: center;
            padding: 30px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        input {
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            width: 80%;
            max-width: 300px;
        }

        button {
            padding: 10px 20px;
            background-color: #5D3FD3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #4336A2;
        }

        #greeting {
            font-size: 20px;
            color: #333;
            margin-top: 20px;
        }

        .error {
            color: #ff4d4d;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome</h1>
        <input type="text" id="username" placeholder="Enter your name" />
        <button onclick="greetUser()">Greet Me</button>
        <div id="greeting"></div>
        <div id="error" class="error"></div>
    </div>

    <script>
        function greetUser() {
            const username = document.getElementById('username').value.trim();
            const greeting = document.getElementById('greeting');
            const error = document.getElementById('error');

            // Reset previous messages
            error.textContent = '';
            greeting.textContent = '';

            if (username) {
                // Show personalized greeting if username is valid
                greeting.textContent = `Welcome, ${username}!`;
            } else {
                // Show error if username is empty
                error.textContent = "Please enter your name.";
            }
        }
    </script>
</body>
</html>
