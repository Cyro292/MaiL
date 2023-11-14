import openai
from backend.settings import OPENAI_API_KEY
import json


def ai_response(input_text):
    """
    Generate a response using OpenAI's GPT-3.5 model.

    :param input_text: String containing the input text.
    :return: String containing the AI-generated response.
    """
    return get_gpt_response(input_text)


def get_gpt_response(input_text):
    """
    Get a response from the GPT-3.5 model.

    :param input_text: String containing the input text.
    :return: String containing the AI-generated response.
    """
    client = openai.OpenAI(api_key=OPENAI_API_KEY)

    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": input_text,
            }
        ],
        model="gpt-3.5-turbo",
    )
    # Access the content attribute directly
    content = response.choices[0].message.content

    return content
