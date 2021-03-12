## Install
```
brew install --cask google-cloud-sdk
source "$(brew --prefix)/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc"
gcloud auth login or gcloud auth application-default login
gcloud init
//settup
gcloud container clusters get-credentials ticketing

<!-- Install nginx -->
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
```

## Run
```
skaffold dev
```

## Note
If chrome warning about ssl typeing 'thisisunsafe'