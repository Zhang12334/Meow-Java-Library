const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meow Java Library</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body, html {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: url('https://example.com/background.jpg') center/cover no-repeat;
                }
                .container {
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    backdrop-filter: blur(10px);
                }
                .box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 300px;
                    height: 300px;
                    background-color: rgba(255, 255, 255, 0.3);
                    border-radius: 15px;
                    color: white;
                    font-size: 1.5em;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="box">
                    <span>Meow Java Library</span>
                </div>
            </div>
        </body>
        </html>
    `;

    res.send(htmlContent);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
