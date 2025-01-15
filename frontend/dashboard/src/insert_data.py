#!/usr/bin/env python3

import mysql.connector
from mysql.connector import Error

def insert_data(connection):
    """Insert data into the tables."""
    cursor = connection.cursor()
    
    insert_project = """
    INSERT INTO subsea_projects (project_name, description, start_date, end_date, budget) 
    VALUES (%s, %s, %s, %s, %s);
    """
    project_data = ('Project Alpha', 'Description of Project Alpha', '2025-01-30', '2025-01-15', 500000.00)
    cursor.execute(insert_project, project_data)

    # Add more insert statements later on

    connection.commit()
    cursor.close()
    print("Data inserted successfully.")

if __name__ == "__main__":
    conn = create_connection()
    insert_data(conn)
