#!/usr/bin/env python3

import mysql.connector
from mysql.connector import Error

def create_connection():
    """Create a database connection."""
    connection = None
    try:
        connection = mysql.connector.connect(
            host='127.0.0.1',
            user='DB_USER',
            password='DB_PASSWORD',
            database='subsea_db'
        )
        if connection.is_connected():
            print("Successfully connected to the database")
    except Error as e:
        print(f"The error '{e}' occurred")
    
    return connection
