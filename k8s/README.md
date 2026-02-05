# Gyürüs Homelab Docs - Kubernetes

Ez a mappa tartalmazza a Docusaurus statikus site futtatasahoz szukseges Kubernetes manifesteket.

## 1) Image

Az image a GHCR-ben van:

`ghcr.io/<owner>/gyurus-docs:<tag>`

Javasolt tagek:
- `latest` (egyszeru, de nem immutable)
- `sha-<rovid-sha>` (ajanlott, immutable)

## 2) Ha a GHCR image private

Hozz letre egy GitHub Personal Access Token-t (PAT) legalabb `read:packages` joggal.

Majd csinalj imagePullSecret-et (namespace-ben):

```bash
kubectl -n gyurus-docs create secret docker-registry ghcr-pull \
  --docker-server=ghcr.io \
  --docker-username=<GITHUB_USERNAME> \
  --docker-password=<GITHUB_PAT> \
  --docker-email=<EMAIL>
```

Ha a package public, ez nem kell.

## 3) Telepites

1. Csereld ki a helyorzo ertekeket:
- `REPLACE_ME_OWNER` (GHCR owner)
- `REPLACE_ME_TAG` (image tag)
- `docs.gyurus.hu` (host)
- `traefik` (IngressClass) - mar erre van beallitva

2. Alkalmazd a manifesteket:

```bash
kubectl apply -f gyurus-docs/k8s/namespace.yaml
kubectl apply -f gyurus-docs/k8s/deployment.yaml
kubectl apply -f gyurus-docs/k8s/service.yaml
kubectl apply -f gyurus-docs/k8s/ingress.yaml
```

## 4) TLS (opcionalis)

Ha hasznalsz cert-manager-t, allitsd be az Ingressen a megfelelo annotaciot es a `tls` reszt.

Traefik esetén az Ingress mar tartalmazza:
- `traefik.ingress.kubernetes.io/router.entrypoints: web,websecure`
- `traefik.ingress.kubernetes.io/router.tls: "true"`
