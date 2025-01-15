#!/usr/bin/env python3

import os
from dotenv import load_dotenv
import mysql.connector
from mysql.connector import Error

# Load environment variables from .env file
load_dotenv()

def create_connection():
    """Create a database connection."""
    connection = None
    try:
        connection = mysql.connector.connect(
            host='127.0.0.1',
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            database='subsea_db'
        )
        if connection.is_connected():
            print("Successfully connected to the database")
    except Error as e:
        print(f"The error '{e}' occurred")
    
    return connection
