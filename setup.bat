@echo off
echo Setting up Tunnel - AI Market Research Platform...
echo.

echo Installing dependencies...
npm install

echo.
echo Setting up environment variables...
if not exist .env.local (
    copy .env.local.example .env.local
    echo Created .env.local file. Please edit it with your API keys.
) else (
    echo .env.local already exists.
)

echo.
echo Setup complete! 
echo.
echo Next steps:
echo 1. Edit .env.local with your API keys
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:3000 in your browser
echo.
pause