import json
import requests

def handler(event, context):
    latitude = event.get("latitude")
    longitude = event.get("longitude")
 
    # HTTP request to upload the mission
    url = "http://23.105.171.72:14550/mavlink/mission"
    headers = {
        "Content-Type": "application/json"
    }
    data = {
        "items": [
            {
                "command": 16, # MAV_CMD_NAV_WAYPOINT
                "params": [0, 0, 0, 10, latitude, longitude, 10, 0, 0, 20, 1]
            }
        ]
    }
    response = requests.post(url, headers=headers, data=json.dumps(data))

    # Check the response status code
    if response.status_code == 200:
        message = f"Mission uploaded to autopilot with coordinates latitude: {latitude} and longitude: {longitude}!"
    else:
        message = "Failed to upload mission to autopilot."

    # Response body
    body = {
        "message": message,
        "input": event
    }

    # Response headers
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,POST'
    }

    # Response object
    response = {
        'statusCode': 200,
        'headers': headers,
        "body": json.dumps(body)
    }

    return response