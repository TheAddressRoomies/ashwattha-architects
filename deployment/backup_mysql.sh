#!/bin/bash

# Directory to store dev files
dev_dir="/etc/developers"
mkdir -p $dev_dir

# Save env variables
env_filename="$dev_dir/ashwattha.env"

source $env_filename

# Directory to store backups
backup_dir="/etc/developers/backup

mkdir -p $backup_dir

# MySQL credentials and database information
mysql_user="$MYSQL_USER"
mysql_password="$MYSQL_PASSWORD"
database_name="$MYSQL_DB"

# Backup file name with timestamp
backup_file="$backup_dir/backup_$(date +\%Y\%m\%d).sql.gz"

# Dump the MySQL database
mysqldump -u $mysql_user -p$mysql_password $database_name | gzip > $backup_file

