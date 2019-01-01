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


Licence
-------

• Le code source est sous licence AGPL : vous pouvez librement le réutiliser, le redistribuer et le modifier tant que vous n'empêchez pas les autres de faire de même, ce qui est rendu possible en offrant vos améliorations à tou‧te‧s. Le plus simple pour cela consiste à ouvrir des _pull requests_ vers ce dépôt.
• Les résultats et les commentaires générés sont sous licence [CC-BY](https://creativecommons.org/licenses/by/4.0/) : vous pouvez en faire ce que vous souhaitez, y compris un usage commercial (formation rémunérée, manuel…), tant que vous indiquez de manière claire que la source originale de ce travail est Matti Schneider (@matti_sg_fr) et si vous avez fait des modifications ou non.
