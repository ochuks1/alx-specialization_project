#!/usr/bin/env python3

import mysql.connector
from mysql.connector import Error

def delete_project(connection, project_name):
    """Delete a project from the subsea_projects table."""
    cursor = connection.cursor()
    delete_query = """
    DELETE FROM subsea_projects WHERE project_name = %s;
    """
    cursor.execute(delete_query, (project_name,))
    connection.commit()
    cursor.close()
    print(f"Project '{project_name}' deleted successfully.")

if __name__ == "__main__":
    conn = create_connection()
    delete_project(conn, 'ALX-specialization')
