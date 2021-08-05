import json
from collections import defaultdict
import os

def leagueIcons():
    icons = os.listdir('src/assets/league_icons')
    container = defaultdict(list)

    for i in icons:
        container["images"].append("/assets/league_icons/" + i)
    
    f = open('src/assets/league_icons/collector.json', 'w')
    json.dump(container, f)
    f.close()


if __name__ == "__main__":
    leagueIcons()