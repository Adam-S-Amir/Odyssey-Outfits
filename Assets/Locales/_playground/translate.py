import json
from easygoogletranslate import EasyGoogleTranslate

translator = EasyGoogleTranslate(
    source_language='en',
    target_language='ko',
    timeout=10
)

def translate_values(data):
    translated_data = {}

    for key, value in data.items():
        translated_value = translator.translate(value)
        translated_data[key] = translated_value

    return translated_data

def translate_json(json_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    translated_data = translate_values(data)

    with open('ko.json', 'w', encoding='utf-8') as output_file:
        json.dump(translated_data, output_file, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    json_file_path = './en.json'
    translate_json(json_file_path)
