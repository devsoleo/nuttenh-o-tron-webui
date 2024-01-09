# nuttenh-o-tron-webui

## Dump database

### Characters
```sql
SELECT 
    entry,
    name,
    subname,
    'enUS' AS locale
FROM
    creature_template

UNION

SELECT entry, Name as name, Title AS subname, locale FROM creature_template_locale WHERE locale = "frFR" OR locale = "esES" OR locale = "deDE"
```

Export in a JSON file and run :
```
$ npm run merge-creatures ../path/of/sql-export.json
```