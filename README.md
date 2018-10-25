Générateurs
-----------

Chaque élément de comparaison (i.e. chaque colonne du tableau) est défini par un générateur.

Certains générateurs ont des dépendances :

- `google-translate` doit être exécuté avec un compte Google Cloud Platform actif et une clé privée configurée [tel que documenté](https://cloud.google.com/translate/docs/quickstart-client-libraries).
- `audio` doit être exécuté sur macOS.

Si vous ne souhaitez ou ne pouvez pas satisfaire ces dépendances, désactivez le générateur correspondant dans `generators/index.js` pour ne pas avoir d'erreur.
