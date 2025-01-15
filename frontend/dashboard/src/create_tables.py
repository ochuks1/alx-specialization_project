#!/usr/bin/env python3

import mysql.connector
from mysql.connector import Error

def create_tables(connection):
    """Create tables in the database."""
    cursor = connection.cursor()
    create_subsea_projects_table = """
    CREATE TABLE subsea_projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_name VARCHAR(255) NOT NULL,
        description TEXT,
        start_date DATE,
        end_date DATE,
        budget DECIMAL(15, 2)
    );
    """
    cursor.execute(create_subsea_projects_table)

    create_pipelines_table = """
    CREATE TABLE pipelines (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_id INT,
        pipeline_name VARCHAR(255) NOT NULL,
        length DECIMAL(10, 2),
        diameter DECIMAL(5, 2),
        material VARCHAR(100),
        FOREIGN KEY (project_id) REFERENCES subsea_projects(id)
    );
    """
    cursor.execute(create_pipelines_table)

    # Add more table creation scripts later on

    connection.commit()
    cursor.close()
    print("Tables created successfully.")

if __name__ == "__main__":
    conn = create_connection()
    create_tables(conn)
