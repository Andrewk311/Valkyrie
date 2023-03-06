import json

def handler(event, context):

    latitude = event.get("latitude")
    longitude = event.get("longitude")

    body = {
        "message": f"Sending the drone the coordinates latitude: {latitude} and longitude: {longitude}!",
        "input": event
    }

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,POST'
    }

    response = {
        'statusCode': 200,
        'headers': headers,
        "body": json.dumps(body)
    }

    return response