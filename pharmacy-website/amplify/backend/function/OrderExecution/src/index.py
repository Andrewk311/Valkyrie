import json

def handler(event, context):
    body = {
        "message": "Hello from your new Lambda function!",
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