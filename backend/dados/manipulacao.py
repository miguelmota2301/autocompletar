import pandas as pd
#import json

df = pd.read_csv('backend/dados/imdb_top_1000.csv')

df = df[['Series_Title']]


df.drop(df[df['Series_Title'].str.len() < 4].index, inplace= True)

#df.info()

df.rename(columns = {'Series_Title': 'title'}, inplace=True)

result = df.to_json(r'/home/miguel/jusbrasil/autocompletarv3/backend/data.json', orient = 'records', indent = 4)

#parsed = json.loads(result)
#print(json.dumps(parsed, indent = 4))

