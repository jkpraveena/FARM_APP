
const cropData = {
    "tomato": {
        weather: "Warm climate, 18-29°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Worldwide",
        methodology: "Start seeds indoors 6-8 weeks before the last frost. Transplant outside after the danger of frost has passed. Keep soil moist. Save seeds from ripe tomatoes, rinse, dry, and plant."
    },
    "carrot": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Deep, loose, well-drained soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide",
        methodology: "Sow seeds directly in the garden in rows. Thin seedlings to prevent overcrowding. Carrot tops can be regrown in shallow water; they won't grow new carrots, but the greens are edible."
    },
    "lettuce": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 6-8 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Sow seeds directly or start indoors and transplant. Harvest leaves regularly to encourage growth. Regrow lettuce from the base of store-bought heads by placing them in water until new leaves sprout."
    },
    "potato": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Late Summer to Fall",
        seedingMethod: "Seed potatoes",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide",
        methodology: "Cut a potato into pieces, each with an eye, and plant in soil with the eye facing up. Cover with soil and water regularly."
    },
    "cucumber": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Temperate to tropical regions",
        methodology: "Sow seeds directly outdoors after the last frost. Keep soil moist and provide support for climbing. Save seeds from mature cucumbers by drying them."
    },
    "spinach": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 6-8 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Sow seeds directly into the soil, keep it moist, and thin seedlings to prevent overcrowding. Harvest leaves regularly to promote growth."
    },
    "broccoli": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Start seeds indoors 6-8 weeks before transplanting. Harden off seedlings before planting outside. Harvest the central head first to encourage side shoots."
    },
    "bell pepper": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer to Fall",
        regions: "Temperate to tropical regions",
        methodology: "Start seeds indoors 8-10 weeks before the last frost. Transplant outside after the soil has warmed. Save seeds from ripe peppers for future planting."
    },
    "onion": {
        weather: "Cool to moderate climate, 15-25°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: Summer or Spring",
        seedingMethod: "Seeds, sets, or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Summer or Fall to Spring",
        regions: "Temperate regions worldwide",
        methodology: "Plant seeds or sets in well-drained soil. Space evenly and water regularly. Green tops can be regrown by placing the cut ends in water."
    },
    "eggplant": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer to Fall",
        regions: "Temperate to tropical regions",
        methodology: "Start seeds indoors 8-10 weeks before transplanting outdoors. Provide warm soil and plenty of sunlight. Harvest when fruits are shiny and firm."
    },
    "cauliflower": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Start seeds indoors 6-8 weeks before transplanting. Keep soil consistently moist. Blanch heads by tying leaves over them to keep them white."
    },
    "cabbage": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 3-4 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Start seeds indoors and transplant outside. Space plants adequately and keep the soil moist. Regrow from the base of a harvested cabbage by placing it in water."
    },
    "green beans": {
        weather: "Warm climate, 18-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Summer",
        regions: "Temperate to tropical regions",
        methodology: "Sow seeds directly into the soil after the last frost. Water regularly and provide support for climbing varieties."
    },
    "peas": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Plant seeds directly into the soil in early spring or fall. Keep soil moist and provide support for vines."
    },
    "radish": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 3-4 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Sow seeds directly into the garden. Harvest when roots are about an inch in diameter. Regrow radish tops in water for edible greens."
    },
    "kale": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring or Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Start seeds indoors or sow directly in the garden. Thin seedlings to prevent overcrowding. Harvest leaves regularly to encourage new growth."
    },
    "zucchini": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Temperate to subtropical regions",
        methodology: "Sow seeds directly outdoors after the last frost. Space plants adequately and keep the soil moist. Harvest when fruits are small and tender."
    },
    "sweet corn": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Temperate to subtropical regions",
        methodology: "Sow seeds directly into the garden in blocks rather than rows to ensure good pollination. Keep soil consistently moist."
    },
    "garlic": {
        weather: "Cool to moderate climate, 10-20°C",
        seedingHarvest: "Planting: Fall, Harvest: Summer",
        seedingMethod: "Cloves",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Fall to Summer",
        regions: "Temperate regions worldwide",
        methodology: "Plant individual cloves, pointy end up, in the fall. Mulch heavily in colder regions. Harvest when the leaves turn yellow."
    },
    "celery": {
        weather: "Cool climate, 15-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Moist, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide",
        methodology: "Start seeds indoors 10-12 weeks before transplanting outside. Keep soil consistently moist. Regrow celery from the base by placing it in water until new growth appears."
    },
    "beets": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Sow seeds directly into the garden. Thin seedlings to prevent overcrowding. Harvest roots when they reach the desired size."
    },
    "asparagus": {
        weather: "Moderate climate, 15-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Spring (2-3 years after planting)",
        seedingMethod: "Crowns or seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring",
        regions: "Temperate regions worldwide",
        methodology: "Plant crowns in trenches in the spring. Asparagus takes 2-3 years to produce harvestable spears but is a perennial crop."
    },
    "brussels sprouts": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Winter",
        regions: "Temperate regions worldwide",
        methodology: "Start seeds indoors 6-8 weeks before transplanting. Space plants adequately. Harvest sprouts from the bottom up as they mature."
    },
    "turnip": {
        weather: "Cool climate, 10-20°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, loose soil",
        growingSeason: "Spring and Fall",
        regions: "Temperate regions worldwide",
        methodology: "Sow seeds directly into the garden. Thin seedlings to prevent overcrowding. Both the roots and greens are edible."
    },
    "swiss chard": {
        weather: "Cool to moderate climate, 10-25°C",
        seedingHarvest: "Planting: Spring and Fall, Harvest: 4-6 weeks after planting",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Temperate regions worldwide",
        methodology: "Sow seeds directly in the garden and thin seedlings as needed. Harvest leaves regularly to promote new growth."
    },
    "okra": {
        weather: "Warm climate, 20-30°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer",
        seedingMethod: "Seeds",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Summer",
        regions: "Subtropical to tropical regions",
        methodology: "Sow seeds directly outdoors after the last frost. Provide warm soil and plenty of sunlight. Harvest pods when young and tender."
    },
    "artichoke": {
        weather: "Cool to moderate climate, 15-25°C",
        seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
        seedingMethod: "Seeds or transplants",
        soilType: "Well-drained, fertile soil",
        growingSeason: "Spring to Fall",
        regions: "Mediterranean and temperate regions",
        methodology: "Plant seeds or transplants in the garden. Artichokes are perennial in mild climates and can produce for several years."
    },
        "leek": {
            weather: "Cool to moderate climate, 10-20°C",
            seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
            seedingMethod: "Seeds or transplants",
            soilType: "Well-drained, fertile soil",
            growingSeason: "Spring to Winter",
            regions: "Temperate regions worldwide",
            methodology: "Start seeds indoors 8-10 weeks before the last frost. Transplant seedlings outdoors after the last frost. Space plants 6-8 inches apart. Harvest when the stalks are about 1 inch in diameter."
        },
        "parsnip": {
            weather: "Cool climate, 10-20°C",
            seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
            seedingMethod: "Seeds",
            soilType: "Deep, loose, well-drained soil",
            growingSeason: "Spring to Winter",
            regions: "Temperate regions worldwide",
            methodology: "Sow seeds directly into the garden. Thin seedlings to 3-4 inches apart. Harvest parsnips after a frost for improved sweetness. Can remain in the ground through winter if mulched."
        },
        "rutabaga": {
            weather: "Cool climate, 10-20°C",
            seedingHarvest: "Planting: Summer, Harvest: Fall to Winter",
            seedingMethod: "Seeds",
            soilType: "Well-drained, fertile soil",
            growingSeason: "Summer to Winter",
            regions: "Temperate regions worldwide",
            methodology: "Sow seeds directly into the garden in summer. Thin seedlings to 6 inches apart. Harvest when the roots are 3-4 inches in diameter. Store in a cool, dark place."
        },
        "kohlrabi": {
            weather: "Cool climate, 10-20°C",
            seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
            seedingMethod: "Seeds",
            soilType: "Well-drained, fertile soil",
            growingSeason: "Spring and Fall",
            regions: "Temperate regions worldwide",
            methodology: "Sow seeds directly or start indoors. Thin seedlings to 6-8 inches apart. Harvest when the bulbs are 2-3 inches in diameter for the best flavor. Can be grown in both spring and fall."
        },
        "endive": {
            weather: "Cool climate, 15-20°C",
            seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
            seedingMethod: "Seeds",
            soilType: "Well-drained, fertile soil",
            growingSeason: "Spring and Fall",
            regions: "Temperate regions worldwide",
            methodology: "Sow seeds directly into the garden or start indoors. Thin seedlings to 6 inches apart. Harvest outer leaves as needed or the whole head when it reaches full size."
        },
        "fennel": {
            weather: "Cool to moderate climate, 15-25°C",
            seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
            seedingMethod: "Seeds",
            soilType: "Well-drained, fertile soil",
            growingSeason: "Spring and Fall",
            regions: "Mediterranean and temperate regions",
            methodology: "Sow seeds directly or start indoors. Thin seedlings to 8-12 inches apart. Harvest the bulbs when they are about 3-4 inches in diameter. Fennel can be grown in both spring and fall."
        },
        "collard greens": {
            weather: "Cool climate, 10-20°C",
            seedingHarvest: "Planting: Spring and Fall, Harvest: 2-3 months after planting",
            seedingMethod: "Seeds or transplants",
            soilType: "Well-drained, fertile soil",
            growingSeason: "Spring and Fall",
            regions: "Temperate regions worldwide",
            methodology: "Sow seeds directly or start indoors. Thin seedlings to 12 inches apart. Harvest outer leaves as needed or the whole plant when it reaches full size."
        },
        "watercress": {
            weather: "Cool climate, 10-20°C",
            seedingHarvest: "Planting: Spring and Fall, Harvest: 4-6 weeks after planting",
            seedingMethod: "Seeds or cuttings",
            soilType: "Moist, fertile soil",
            growingSeason: "Spring and Fall",
            regions: "Temperate regions worldwide",
            methodology: "Sow seeds directly in a moist, shaded area or start indoors. Harvest leaves regularly to encourage new growth. Keep soil consistently moist."
        },
        "taro": {
            weather: "Tropical to subtropical climate, 20-30°C",
            seedingHarvest: "Planting: Spring, Harvest: 6-8 months after planting",
            seedingMethod: "Corms",
            soilType: "Moist, fertile soil",
            growingSeason: "Year-round in tropical climates",
            regions: "Tropical and subtropical regions",
            methodology: "Plant corms in warm, moist soil. Keep soil consistently wet throughout the growing season. Harvest when the leaves die back and the corms are mature."
        },
            "yam": {
                weather: "Tropical to subtropical climate, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: 8-10 months after planting",
                seedingMethod: "Tuber pieces",
                soilType: "Well-drained, fertile soil",
                growingSeason: "Year-round in tropical climates",
                regions: "Tropical and subtropical regions",
                methodology: "Plant tuber pieces in warm, well-drained soil. Space tubers about 1 meter apart. Harvest when leaves start to yellow. Store in a cool, dry place."
            },
            "jicama": {
                weather: "Warm climate, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: 5-9 months after planting",
                seedingMethod: "Seeds",
                soilType: "Well-drained, sandy soil",
                growingSeason: "Spring to Fall",
                regions: "Tropical and subtropical regions",
                methodology: "Sow seeds directly into the garden after the last frost. Thin seedlings to 6 inches apart. Harvest when the leaves start to die back."
            },
            "celeriac": {
                weather: "Cool climate, 15-20°C",
                seedingHarvest: "Planting: Spring, Harvest: Fall",
                seedingMethod: "Seeds",
                soilType: "Moist, fertile soil",
                growingSeason: "Spring to Fall",
                regions: "Temperate regions worldwide",
                methodology: "Start seeds indoors 10-12 weeks before the last frost. Transplant seedlings outdoors after frost danger. Space plants 8-12 inches apart. Harvest when bulbs reach 3-4 inches in diameter."
            },
            "apple": {
                weather: "Cool climate, 10-25°C",
                seedingHarvest: "Planting: Spring, Harvest: Late Summer to Fall",
                seedingMethod: "Grafting or seedlings",
                soilType: "Well-drained loamy soil",
                growingSeason: "Spring to Fall",
                regions: "Temperate regions worldwide",
                methodology: "Plant grafted apple trees in well-drained soil. Space trees 10-15 feet apart. Prune annually to maintain shape. Harvest apples when they are firm and fully colored."
            },
            "banana": {
                weather: "Tropical climate, 20-35°C",
                seedingHarvest: "Planting: Year-round, Harvest: 9-12 months after planting",
                seedingMethod: "Suckers or tissue culture",
                soilType: "Rich, well-drained soil",
                growingSeason: "Year-round in tropical climates",
                regions: "Tropical and subtropical regions",
                methodology: "Plant suckers or tissue-cultured plants in rich, well-drained soil. Space plants 2-3 meters apart. Harvest when the bananas are plump and the fruits start to change color."
            },
            "orange": {
                weather: "Warm climate, 15-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Winter",
                seedingMethod: "Grafting",
                soilType: "Well-drained, slightly acidic soil",
                growingSeason: "Year-round",
                regions: "Mediterranean, subtropical regions",
                methodology: "Graft orange trees onto suitable rootstocks. Plant in well-drained soil with good sunlight. Space trees 10-15 feet apart. Harvest when oranges are fully colored and firm."
            },
            "strawberry": {
                weather: "Temperate climate, 15-25°C",
                seedingHarvest: "Planting: Spring or Fall, Harvest: Spring to Summer",
                seedingMethod: "Runners or seeds",
                soilType: "Well-drained, rich soil",
                growingSeason: "Spring to Summer",
                regions: "Temperate regions worldwide",
                methodology: "Plant strawberries in well-drained soil. Space plants 12-18 inches apart. Mulch to retain moisture and reduce weeds. Harvest berries when fully red and ripe."
            },
            "grape": {
                weather: "Mediterranean climate, 15-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Late Summer to Fall",
                seedingMethod: "Cuttings or grafting",
                soilType: "Well-drained, slightly alkaline soil",
                growingSeason: "Spring to Fall",
                regions: "Mediterranean, temperate regions",
                methodology: "Plant grapevines in well-drained soil. Space vines 6-8 feet apart. Prune regularly to manage growth. Harvest grapes when they are fully colored and sweet."
            },
            "mango": {
                weather: "Tropical to subtropical, 24-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Summer",
                seedingMethod: "Grafting",
                soilType: "Well-drained, rich soil",
                growingSeason: "Year-round in tropical climates",
                regions: "Tropical and subtropical regions",
                methodology: "Graft mango trees onto suitable rootstocks. Plant in well-drained, fertile soil. Space trees 10-15 feet apart. Harvest when the mangoes change color and emit a fruity aroma."
            },
            "pineapple": {
                weather: "Tropical climate, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: 18-24 months after planting",
                seedingMethod: "Crown or slips",
                soilType: "Well-drained, sandy loam",
                growingSeason: "Year-round in tropical climates",
                regions: "Tropical regions",
                methodology: "Plant pineapple crowns or slips in well-drained soil. Space plants 1 meter apart. Harvest when the fruit is golden and has a strong aroma."
            },
            "watermelon": {
                weather: "Warm climate, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Summer",
                seedingMethod: "Seeds",
                soilType: "Well-drained, sandy loam",
                growingSeason: "Summer",
                regions: "Warm temperate to tropical regions",
                methodology: "Sow seeds directly in warm, well-drained soil. Thin seedlings to 1 meter apart. Harvest when the tendril nearest the fruit turns brown and the watermelon sounds hollow when tapped."
            },
            "peach": {
                weather: "Temperate climate, 15-25°C",
                seedingHarvest: "Planting: Winter, Harvest: Summer",
                seedingMethod: "Grafting",
                soilType: "Well-drained, sandy loam",
                growingSeason: "Spring to Summer",
                regions: "Temperate regions",
                methodology: "Graft peach trees onto suitable rootstocks. Plant in well-drained soil with ample sunlight. Space trees 10-15 feet apart. Harvest when peaches are firm and aromatic."
            },
            "kiwi": {
                weather: "Temperate climate, 15-20°C",
                seedingHarvest: "Planting: Fall or Spring, Harvest: Fall",
                seedingMethod: "Grafting or cuttings",
                soilType: "Well-drained, slightly acidic soil",
                growingSeason: "Spring to Fall",
                regions: "Temperate regions",
                methodology: "Graft kiwi vines onto suitable rootstocks or start from cuttings. Plant in well-drained soil with ample sunlight. Space vines 3 meters apart. Harvest when fruits are slightly soft to the touch."
            },
            "cherry": {
                weather: "Cool climate, 15-25°C",
                seedingHarvest: "Planting: Winter, Harvest: Early Summer",
                seedingMethod: "Grafting",
                soilType: "Well-drained, fertile soil",
                growingSeason: "Spring to Summer",
                regions: "Temperate regions",
                methodology: "Graft cherry trees onto suitable rootstocks. Plant in well-drained soil. Space trees 10-15 feet apart. Harvest cherries when they are fully colored and sweet."
            },
            "avocado": {
                weather: "Subtropical climate, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Year-round",
                seedingMethod: "Grafting",
                soilType: "Well-drained, sandy loam",
                growingSeason: "Year-round",
                regions: "Subtropical regions",
                methodology: "Graft avocado trees onto suitable rootstocks. Plant in well-drained soil. Space trees 10-15 feet apart. Harvest avocados when they are mature but still firm."
            },
            "papaya": {
                weather: "Tropical climate, 20-30°C",
                seedingHarvest: "Planting: Year-round, Harvest: 9-12 months after planting",
                seedingMethod: "Seeds",
                soilType: "Well-drained, rich soil",
                growingSeason: "Year-round in tropical climates",
                regions: "Tropical and subtropical regions",
                methodology: "Sow papaya seeds directly in warm, well-drained soil. Space plants 2-3 meters apart. Harvest when fruits are yellow and slightly soft to the touch."
            },
            "plum": {
                weather: "Temperate climate, 15-25°C",
                seedingHarvest: "Planting: Winter, Harvest: Summer",
                seedingMethod: "Grafting",
                soilType: "Well-drained, fertile soil",
                growingSeason: "Spring to Summer",
                regions: "Temperate regions",
                methodology: "Graft plum trees onto suitable rootstocks. Plant in well-drained soil. Space trees 10-15 feet apart. Harvest plums when they are fully colored and slightly soft."
            },
            "lemon": {
                weather: "Mediterranean climate, 15-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Year-round",
                seedingMethod: "Grafting",
                soilType: "Well-drained, slightly acidic soil",
                growingSeason: "Year-round",
                regions: "Mediterranean, subtropical regions",
                methodology: "Graft lemon trees onto suitable rootstocks. Plant in well-drained soil with good sunlight. Space trees 10-15 feet apart. Harvest lemons when they are fully yellow and firm."
            },
            "blackberry": {
                weather: "Temperate climate, 15-25°C",
                seedingHarvest: "Planting: Spring or Fall, Harvest: Summer",
                seedingMethod: "Cuttings or root divisions",
                soilType: "Well-drained, rich soil",
                growingSeason: "Spring to Summer",
                regions: "Temperate regions",
                methodology: "Plant blackberry canes in well-drained soil. Space canes 3-4 feet apart. Prune annually to manage growth. Harvest berries when they are fully black and sweet."
            },
            "fig": {
                weather: "Mediterranean climate, 15-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
                seedingMethod: "Cuttings",
                soilType: "Well-drained, fertile soil",
                growingSeason: "Spring to Fall",
                regions: "Mediterranean, warm temperate regions",
                methodology: "Plant fig cuttings in well-drained soil. Space trees 10-15 feet apart. Prune to maintain shape. Harvest figs when they are fully ripe and slightly soft."
            },
            "guava": {
                weather: "Tropical to subtropical, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Year-round",
                seedingMethod: "Seeds or grafting",
                soilType: "Well-drained, fertile soil",
                growingSeason: "Year-round in tropical climates",
                regions: "Tropical and subtropical regions",
                methodology: "Plant guava seeds or grafted trees in well-drained soil. Space trees 10-15 feet apart. Harvest guavas when they are slightly soft and aromatic."
            },
            "pomegranate": {
                weather: "Mediterranean climate, 15-35°C",
                seedingHarvest: "Planting: Winter, Harvest: Fall",
                seedingMethod: "Cuttings or air layering",
                soilType: "Well-drained, slightly alkaline soil",
                growingSeason: "Spring to Fall",
                regions: "Mediterranean, subtropical regions",
                methodology: "Plant pomegranate cuttings or use air layering. Space plants 10-15 feet apart. Harvest pomegranates when they are fully colored and the skin is firm."
            },
            "raspberry": {
                weather: "Cool climate, 15-25°C",
                seedingHarvest: "Planting: Spring or Fall, Harvest: Summer",
                seedingMethod: "Cane cuttings or root divisions",
                soilType: "Well-drained, rich soil",
                growingSeason: "Spring to Summer",
                regions: "Temperate regions",
                methodology: "Plant raspberry canes in well-drained soil. Space canes 18-24 inches apart. Prune annually to encourage fruiting. Harvest berries when they are fully ripe and easily come off the stem."
            },
            "apricot": {
                weather: "Mediterranean climate, 15-30°C",
                seedingHarvest: "Planting: Winter, Harvest: Early Summer",
                seedingMethod: "Grafting",
                soilType: "Well-drained, slightly alkaline soil",
                growingSeason: "Spring to Summer",
                regions: "Mediterranean, temperate regions",
                methodology: "Graft apricot trees onto suitable rootstocks. Plant in well-drained soil with good sunlight. Space trees 10-15 feet apart. Harvest apricots when they are firm but slightly soft and aromatic."
            },
            "coconut": {
                weather: "Tropical climate, 25-35°C",
                seedingHarvest: "Planting: Year-round, Harvest: 6-10 years after planting",
                seedingMethod: "Seed (coconut)",
                soilType: "Well-drained, sandy soil",
                growingSeason: "Year-round",
                regions: "Tropical coastal regions",
                methodology: "Plant coconuts in well-drained sandy soil. Space trees 7-10 meters apart. Harvest mature coconuts when they have a brown husk and the water inside is reduced."
            },
            "dragonfruit": {
                weather: "Tropical to subtropical, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Summer to Fall",
                seedingMethod: "Cuttings",
                soilType: "Well-drained, slightly acidic soil",
                growingSeason: "Spring to Fall",
                regions: "Tropical and subtropical regions",
                methodology: "Plant dragonfruit cuttings in well-drained soil. Space plants 1-2 meters apart. Provide support for climbing. Harvest when fruits turn bright red and are slightly soft."
            },
            "lychee": {
                weather: "Subtropical climate, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Summer",
                seedingMethod: "Air layering or grafting",
                soilType: "Well-drained, acidic soil",
                growingSeason: "Spring to Summer",
                regions: "Subtropical regions",
                methodology: "Use air layering or grafting to propagate lychee trees. Plant in well-drained, acidic soil. Space trees 10-15 feet apart. Harvest lychees when they turn bright red and are easy to peel."
            },
            "passionfruit": {
                weather: "Tropical to subtropical, 20-30°C",
                seedingHarvest: "Planting: Spring, Harvest: Fall to Winter",
                seedingMethod: "Seeds or cuttings",
                soilType: "Well-drained, rich soil",
                growingSeason: "Year-round in tropical climates",
                regions: "Tropical and subtropical regions",
                methodology: "Sow passionfruit seeds or plant cuttings in well-drained soil. Space plants 1-2 meters apart. Provide a trellis for support. Harvest fruits when they are wrinkled and aromatic."
            },
                "persimmon": {
                    weather: "Temperate to subtropical, 15-30°C",
                    seedingHarvest: "Planting: Winter, Harvest: Fall",
                    seedingMethod: "Grafting",
                    soilType: "Well-drained, loamy soil",
                    growingSeason: "Spring to Fall",
                    regions: "Temperate to subtropical regions",
                    methodology: "Graft persimmon onto suitable rootstocks. Plant in well-drained, loamy soil with full sunlight. Space trees 15-20 feet apart. Harvest when fruits are fully colored and slightly soft."
                },
                "blueberry": {
                    weather: "Cool climate, 15-25°C",
                    seedingHarvest: "Planting: Spring or Fall, Harvest: Summer",
                    seedingMethod: "Cuttings or seedlings",
                    soilType: "Well-drained, acidic soil",
                    growingSeason: "Spring to Summer",
                    regions: "Temperate regions",
                    methodology: "Plant blueberry bushes in acidic, well-drained soil. Space bushes 4-6 feet apart. Mulch to retain moisture and keep weeds away. Harvest when berries are fully blue and firm."
                },
                "cranberry": {
                    weather: "Cool climate, 15-25°C",
                    seedingHarvest: "Planting: Spring, Harvest: Fall",
                    seedingMethod: "Cuttings or seedlings",
                    soilType: "Acidic, peaty soil",
                    growingSeason: "Spring to Fall",
                    regions: "Cool temperate regions",
                    methodology: "Plant cranberries in acidic, peaty soil. Space plants 1-2 feet apart. Water regularly to keep soil moist. Harvest when berries are bright red and have a firm texture."
                },
                "durian": {
                    weather: "Tropical climate, 25-35°C",
                    seedingHarvest: "Planting: Rainy season, Harvest: 4-5 years after planting",
                    seedingMethod: "Seeds or grafting",
                    soilType: "Well-drained, rich soil",
                    growingSeason: "Year-round",
                    regions: "Southeast Asia",
                    methodology: "Plant durian seeds or grafted trees in well-drained, rich soil. Space trees 10-15 meters apart. Water regularly and provide shade if necessary. Harvest when the fruit's spiky shell turns brown and emits a strong odor."
                },
                "grapefruit": {
                    weather: "Subtropical climate, 15-30°C",
                    seedingHarvest: "Planting: Spring, Harvest: Winter",
                    seedingMethod: "Grafting",
                    soilType: "Well-drained, slightly acidic soil",
                    growingSeason: "Year-round",
                    regions: "Subtropical regions",
                    methodology: "Graft grapefruit trees onto suitable rootstocks. Plant in well-drained, slightly acidic soil. Space trees 10-15 feet apart. Harvest when the fruit's skin color turns deep orange or pink and the fruit feels heavy for its size."
                },
                "kiwifruit": {
                    weather: "Temperate climate, 15-20°C",
                    seedingHarvest: "Planting: Fall or Spring, Harvest: Fall",
                    seedingMethod: "Grafting or cuttings",
                    soilType: "Well-drained, slightly acidic soil",
                    growingSeason: "Spring to Fall",
                    regions: "Temperate regions",
                    methodology: "Graft kiwi vines onto suitable rootstocks or start from cuttings. Plant in well-drained, slightly acidic soil with ample sunlight. Space vines 3 meters apart. Harvest when fruits are slightly soft to the touch and aromatic."
                },
                "lime": {
                    weather: "Tropical to subtropical, 20-30°C",
                    seedingHarvest: "Planting: Spring, Harvest: Year-round",
                    seedingMethod: "Grafting",
                    soilType: "Well-drained, slightly acidic soil",
                    growingSeason: "Year-round",
                    regions: "Tropical and subtropical regions",
                    methodology: "Graft lime trees onto suitable rootstocks. Plant in well-drained, slightly acidic soil with good sunlight. Space trees 10-15 feet apart. Harvest limes when they are green and firm, and the fruit size is appropriate."
                },
                "longan": {
                    weather: "Tropical to subtropical, 20-30°C",
                    seedingHarvest: "Planting: Spring, Harvest: Summer",
                    seedingMethod: "Air layering or grafting",
                    soilType: "Well-drained, slightly acidic soil",
                    growingSeason: "Spring to Summer",
                    regions: "Tropical and subtropical regions",
                    methodology: "Use air layering or grafting to propagate longan trees. Plant in well-drained, slightly acidic soil. Space trees 10-15 feet apart. Harvest when fruits turn brown and have a translucent appearance."
                },
                "loquat": {
                    weather: "Subtropical climate, 15-30°C",
                    seedingHarvest: "Planting: Spring, Harvest: Spring",
                    seedingMethod: "Seeds or grafting",
                    soilType: "Well-drained, fertile soil",
                    growingSeason: "Year-round",
                    regions: "Subtropical regions",
                    methodology: "Plant loquat trees from seeds or grafting. Space trees 10-15 feet apart in well-drained, fertile soil. Prune to shape. Harvest when fruits turn orange and are slightly soft."
                },
                "mandarin": {
                    weather: "Subtropical climate, 15-30°C",
                    seedingHarvest: "Planting: Spring, Harvest: Winter",
                    seedingMethod: "Grafting",
                    soilType: "Well-drained, slightly acidic soil",
                    growingSeason: "Year-round",
                    regions: "Subtropical regions",
                    methodology: "Graft mandarin trees onto suitable rootstocks. Plant in well-drained, slightly acidic soil with full sunlight. Space trees 10-15 feet apart. Harvest when the fruit is fully colored and easily comes off the stem."
                },
                "mangosteen": {
                    weather: "Tropical climate, 25-35°C",
                    seedingHarvest: "Planting: Rainy season, Harvest: 10-20 years after planting",
                    seedingMethod: "Seeds",
                    soilType: "Well-drained, rich soil",
                    growingSeason: "Year-round",
                    regions: "Tropical regions",
                    methodology: "Plant mangosteen seeds in well-drained, rich soil. Space trees 10-15 meters apart. Water regularly and provide shade if necessary. Harvest when the fruit's rind turns deep purple and feels slightly soft."
                },
                "mulberry": {
                    weather: "Temperate to subtropical, 15-30°C",
                    seedingHarvest: "Planting: Spring, Harvest: Summer",
                    seedingMethod: "Cuttings or grafting",
                    soilType: "Well-drained, fertile soil",
                    growingSeason: "Spring to Summer",
                    regions: "Temperate to subtropical regions",
                    methodology: "Plant mulberry trees from cuttings or grafting in well-drained, fertile soil. Space trees 10-15 feet apart. Prune regularly to manage growth. Harvest when fruits are fully colored and sweet."
                },
                "nectarine": {
                    weather: "Temperate climate, 15-25°C",
                    seedingHarvest: "Planting: Winter, Harvest: Summer",
                    seedingMethod: "Grafting",
                    soilType: "Well-drained, sandy loam",
                    growingSeason: "Spring to Summer",
                    regions: "Temperate regions",
                    methodology: "Graft nectarine trees onto suitable rootstocks. Plant in well-drained, sandy loam soil with full sunlight. Space trees 10-15 feet apart. Harvest when nectarines are firm but slightly soft and aromatic."
                },
                "olive": {
                    weather: "Mediterranean climate, 15-30°C",
                    seedingHarvest: "Planting: Spring, Harvest: Fall",
                    seedingMethod: "Cuttings or grafting",
                    soilType: "Well-drained, slightly alkaline soil",
                    growingSeason: "Year-round",
                    regions: "Mediterranean regions",
                    methodology: "Propagate olive trees using cuttings or grafting. Plant in well-drained, slightly alkaline soil. Space trees 10-15 feet apart. Harvest olives when they are green or black, depending on the variety and desired ripeness."
                }
};

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const cropSearch = document.getElementById('crop-search');
    const resultSection = document.getElementById('result-section');

    searchBtn.addEventListener('click', searchCrop);
    cropSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchCrop();
        }
    });

    function searchCrop() {
        const cropName = cropSearch.value.toLowerCase().trim();
        if (cropData[cropName]) {
            displayCropInfo(cropName, cropData[cropName]);
        } else {
            displayError();
        }
    }

    function displayCropInfo(cropName, info) {
        resultSection.innerHTML = `
            <h2>${cropName.charAt(0).toUpperCase() + cropName.slice(1)}</h2>
            <p><strong>Weather Conditions:</strong> ${info.weather}</p>
            <p><strong>Seeding and Harvest Times:</strong> ${info.seedingHarvest}</p>
            <p><strong>Seeding Method:</strong> ${info.seedingMethod}</p>
            <p><strong>Soil Type:</strong> ${info.soilType}</p>
            <p><strong>Growing Season:</strong> ${info.growingSeason}</p>
            <p><strong>Major Regions:</strong> ${info.regions}</p>
            <p><strong>Methodology:</strong> ${info.methodology}</p>
        `;
    }

    function displayError() {
        resultSection.innerHTML = '<p class="error">Crop not found. Please try another crop name.</p>';
    }
});