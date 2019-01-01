Normaliser et faciliter l'usage de l'écriture inclusive


Générer localement
------------------

Installer [Jekyll](https://jekyllrb.com), cloner le dépôt, `cd` dedans puis :

```
npm install
./build.sh
```

Générateurs
-----------

Chaque élément de comparaison (i.e. chaque colonne du tableau) est défini par un générateur.

Pour générer le tableau, exécuter `node generators/index.js`. Le HTML du tableau est diffusé sur `stdout`.

Certains générateurs ont des dépendances externes :

- `google-translate` doit être exécuté avec un compte Google Cloud Platform actif et une clé privée configurée [tel que documenté](https://cloud.google.com/translate/docs/quickstart-client-libraries).
- `voiceover` doit être exécuté sur macOS.
- `doubleclick-macos` doit être exécuté sur macOS.

Si vous ne souhaitez ou ne pouvez pas satisfaire ces dépendances, désactivez le générateur correspondant dans `generators/index.js` pour ne pas avoir d'erreur.
