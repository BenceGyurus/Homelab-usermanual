# GitHub Actions elhelyezese

A GitHub csak a repo gyokereben levo `/.github/workflows/*.yml` fajlokat futtatja workflow-kent.

Ezert a **workflow fajl a gyokerben marad**, viszont a lepesek (build/push) nagy resze a
`gyurus-docs/.github/actions/` ala kerult, hogy a docs projekthez tartozzon minden.
