module.exports = {
  apps: [
    {
      name: "streamlit-app",
      // Use the virtual environment's Python executable
      interpreter: "C:/Users/USER/Desktop/businessCard-main/venv/Scripts/python.exe",
      // Specify the working directory
      cwd: "C:/Users/USER/Desktop/businessCard-main/",
      // Run Streamlit directly with the script as an argument
      script: "C:/Users/USER/Desktop/businessCard-main/venv/Scripts/streamlit.exe",
      args: [
        "run",
        "business_card_app_v2.py",
        "--server.port", "8501",
        "--server.address", "localhost"
      ],
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      // Ensure PM2 kills the process cleanly
      kill_timeout: 3000,
      // Environment variables (optional, if needed)
      env: {
        PYTHONPATH: "C:/Users/USER/Desktop/businessCard-main/"
      }
    }
  ]
};