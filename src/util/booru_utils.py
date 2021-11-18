import os.path
from json import load

# Load boorus from JSON
with open(os.path.dirname(__file__) + '/../default-booru-list.json', 'r') as f:
    default_booru_list = load(f)

# Load boorus from JSON
with open(os.path.dirname(__file__) + '/../supported-booru-list.json', 'r') as f:
    supported_booru_list = load(f)


def find_boorus_with_value_by_key(value, key='domain', _list=default_booru_list):

    values = list(filter(lambda x: x[key] == value, _list))

    if not values:
        return None

    return values


def find_boorus_with_value_list_by_key(value_list, key='domain', _list=default_booru_list):

    values = list(
        filter(lambda x: x[key] in value_list, _list))

    if not values:
        return None

    return values


# def remove_boorus_with_value_list_by_key(value_list, key='domain', _list=default_booru_list):

#     values = list(
#         filter(lambda x: x[key] not in value_list, _list))

#     if not values:
#         return None

#     return values


# Exported values
# - default_booru_list
# - booru_complete_list

# Exported functions
# - find_boorus_with_value_by_key
# - find_boorus_with_value_list_by_key
# - remove_boorus_with_value_list_by_key


# Example presets
# default_booru_list_nsfw = find_boorus_with_value_by_key(True, 'nsfw', default_booru_list)

# Example usage
# print(default_booru_list_nsfw, len(default_booru_list_nsfw))
# print(find_boorus_with_value_by_key('rule34.xxx', 'domain'))
# print(remove_boorus_with_value_list_by_key(["rule34.xxx"], 'domain', default_booru_list_nsfw))
