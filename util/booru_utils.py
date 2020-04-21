import os.path
from json import load

# Load boorus from json
with open(os.path.dirname(__file__) + '/../booru-list.json', 'r') as f:
    booru_list = load(f)


def remove_key_of_list(_list, key, value_list):

    return list(
        filter(lambda x: x[key] not in value_list, _list))


def booru_list_nsfw():

    return list(
        filter(lambda x: x['nsfw'] == True, booru_list))


# Exported values
# - booru_list
# - remove_key_of_list()
# - booru_list_nsfw()

# Example usage
# remove_key_of_list(booru_list_nsfw(), "short", ["xxx"])
