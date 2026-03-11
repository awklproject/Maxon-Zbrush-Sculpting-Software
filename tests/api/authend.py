import subprocess
import json


def run_curl_command(cmd):
    """
    Execute a curl command and return the output.
    """
    result = subprocess.run(cmd, shell=True, text=True, capture_output=True)
    if result.stderr:
        print("Error:", result.stderr)
    else:
        return result.stdout


def register_user(username, password):
    """
    Register a new user.
    """
    data = json.dumps({"username": username, "password": password})
    cmd = f'curl -X POST http://127.0.0.1:8000/register/ -H "Content-Type: application/json" -d "{data}"'
    return run_curl_command(cmd)


def login_user(username, password):
    """
    Log in a user.
    """
    data = json.dumps({"username": username, "password": password})
    cmd = f'curl -X POST http://127.0.0.1:8000/login/ -H "Content-Type: application/json" -d "{data}"'
    return run_curl_command(cmd)


def refresh_token(refresh_token):
    """
    Refresh the access token using the refresh token.
    """
    data = json.dumps({"refresh": refresh_token})
    cmd = f'curl -X POST http://127.0.0.1:8000/api/auth/token/refresh/ -H "Content-Type: application/json" -d "{data}"'
    return run_curl_command(cmd)


def logout_user(refresh_token):
    """
    Log out a user by blacklisting their refresh token.
    """
    data = json.dumps({"refresh": refresh_token})
    cmd = f'curl -X POST http://127.0.0.1:8000/api/auth/logout/ -H "Content-Type: application/json" -d "{data}"'
    return run_curl_command(cmd)


if __name__ == "__main__":
    # Example usage:
    print("Registering user...")
    response = register_user("newuser", "newpass123")
    print(response)

    print("Logging in user...")
    login_response = login_user("newuser", "newpass123")
    print(login_response)

    # Assuming login_response contains a refresh token, parse it and use it:
    if login_response:
        login_data = json.loads(login_response)
        print("DOONE")
        refresh_token = login_data.get('refresh')

        print("Refreshing token...")
        refresh_response = refresh_token(refresh_token)
        print(refresh_response)

        print("Logging out user...")
        logout_response = logout_user(refresh_token)
        print(logout_response)

