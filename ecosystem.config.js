module.exports = { 
  apps: [
    {
      name: "streamlit-app",
      script: "C:/Users/USER/Desktop/businessCard-main/venv/Scripts/python.exe",
      args: [
        "-m", "streamlit", "run",
        "business_card_app_v2.py",
        "--server.port", "8501",
        "--server.address", "localhost"
      ],
      cwd: "C:/Users/USER/Desktop/businessCard-main/",
      interpreter: "none",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M"
    }
  ]
}