#!/bin/bash

# Check if the number of arguments is not equal to 2
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <mysql_username> <mysql_password> <mysql_db_name>"
    exit 1
fi

echo "Creating directory for developers" 

# Directory to store dev files 
dev_dir="/etc/developers"
mkdir -p $dev_dir

# Save env variables
env_filename="$dev_dir/ashwattha.env"

> "$env_filename"

echo 'export MYSQL_USER=\"$1\"' >> "$env_filename"
echo 'export MYSQL_PASSWORD=\"$2\"' >> "$env_filename"
echo 'export MYSQL_DB=\"$3\"' >> "$env_filename"

# Update package lists
sudo apt-get update

# Install Java (OpenJDK)
sudo apt-get install -y openjdk-17-jdk

# Install Node.js and npm for React
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MySQL
sudo apt-get install -y mysql-server

# Secure MySQL installation (optional)
# sudo mysql_secure_installation

# Start MySQL service
sudo systemctl start mysql

# Enable MySQL service to start on boot
sudo systemctl enable mysql

# Print Java, Node.js, npm, and MySQL versions
echo "Java version:"
java -version

echo "Node.js version:"
node -v

echo "npm version:"
npm -v

echo "MySQL version:"
mysql --version

echo "Copying and enabling SpringBoot App"
cp ashtwattha-springboot-app.service /lib/systemd/system

echo "Copying and enabling React App"
cp ashtwattha-react-app.service /lib/systemd/system

systemctl daemon-reload
systemctl start ashtwattha-react-app
systemctl enable ashtwattha-react-app
systemctl start ashtwattha-springboot-app
systemctl enable ashtwattha-springboot-app

echo "Copying mysql backup cronjob"
cp -f backup_mysql.sh /etc/cron.d/backup_mysql.sh
cp -f mysql_backup_cronjob /etc/cron.d/mysql_backup_cronjob
