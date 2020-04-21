import os.path
from json import load

# Load boorus from json
with open(os.path.dirname(__file__) + '/../booru-list.json', 'r') as f:
    booru_list = load(f)


def find_boorus_with_value_by_key(value, key='short', _list=booru_list):

    values = list(filter(lambda x: x[key] == value, _list))

    if not values:
        return None

    return values


def remove_boorus_with_values_by_key(value_list, key='short', _list=booru_list):

    values = list(
        filter(lambda x: x[key] not in value_list, _list))

    if not values:
        return None

    return values


# Some presets
booru_list_nsfw = find_boorus_with_value_by_key(True, 'nsfw', booru_list)


# Exported values
# - booru_list
# - booru_list_nsfw

# Exported functions
# - find_boorus_with_value_by_key
# - remove_boorus_with_values_by_key


# Example usage
# print(booru_list_nsfw, len(booru_list_nsfw))
# print(find_boorus_with_value_by_key('xxx', 'short'))
# print(remove_boorus_with_values_by_key(["xxx"], 'short', booru_list_nsfw))
