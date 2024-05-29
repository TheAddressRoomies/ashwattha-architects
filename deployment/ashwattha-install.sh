#!/bin/bash
set -x
set -e
# set -o pipefail

git clone https://github.com/TheAddressRoomies/ashwattha-architects.git

# Check if the number of arguments is not equal to 4
if [ "$#" -ne 4 ]; then
    echo "Usage: $0 <domain_name> <mysql_username> <mysql_password> <mysql_db_name>"
    exit 1
fi

echo "Creating directory for developers" 

# Directory to store dev files 
dev_dir="/etc/developers"
mkdir -p $dev_dir

# Save env variables
env_filename="$dev_dir/ashwattha.env"

> "$env_filename"

echo "export MYSQL_USER=$2" >> "$env_filename"
echo "export MYSQL_PASSWORD=$3" >> "$env_filename"
echo "export MYSQL_DB=$4" >> "$env_filename"

# Update package lists
sudo apt-get update

# Install Java (OpenJDK)
sudo apt-get install -y openjdk-17-jdk

# Install Node.js and npm for React
#curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
# sudo apt-get install -y nodejs

# Install MySQL
sudo apt-get install -y mysql-server

# Secure MySQL installation (optional)
# sudo mysql_secure_installation

# Start MySQL service
sudo systemctl start mysql

# Enable MySQL service to start on boot
sudo systemctl enable mysql

# Install nginx
sudo apt install nginx

# Print Java, Node.js, npm, and MySQL versions
echo "Java version:"
java -version

echo "Node.js version:"
node -v

echo "npm version:"
npm -v

echo "MySQL version:"
mysql --version

echo "Nginx version:"
nginx -v

echo "Copying and enabling SpringBoot App"
cp ashwattha-springboot-app.service /lib/systemd/system

echo "Copying and enabling React App"
cp ashwattha-react-app.service /lib/systemd/system

echo "creating nginx confiuration"
cat <<EOF > /etc/nginx/sites-available/$1 
server {
    listen 80;
    server_name $1 www.$1
    location / {
        proxy_pass http://127.0.0.1:your-port;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

echo "creating nginx softlink"
ln -sf /etc/nginx/sites-available/$1 /etc/nginx/sites-enabled/$1

echo "configuring mysql user and database"
mysql -e "CREATE USER IF NOT EXISTS '$2'@'localhost' IDENTIFIED BY '$4';"
mysql -e "CREATE DATABASE IF NOT EXISTS $3;"
mysql -e "GRANT ALL PRIVILEGES ON $3.* TO '$2'@'localhost';"

cd ashwattha-architects/backend
mvn clean install
mv target/studioashwattha-backend-0.0.1-SNAPSHOT.jar /etc/developers

systemctl daemon-reload
systemctl start ashwattha-react-app
systemctl enable ashwattha-react-app
systemctl start ashwattha-springboot-app
systemctl enable ashwattha-springboot-app

echo "Copying mysql backup cronjob"
cp -f backup_mysql.sh /etc/cron.d/backup_mysql.sh
cp -f mysql_backup_cronjob /etc/cron.d/mysql_backup_cronjob
