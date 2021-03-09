```
kubectl version
```

## Create POD
```
kubectl apply -f post.yaml
```
## Get POD
```
kubectl get pods
```
## Compare docker - K8s
```
docker ps   -> kubectl get pods
docker exect -it [container id][cmd] -> kubectl exect -it [pod_name][cmd]
docker logs [container id] -> kubectl logs [pod_name]

kubectl  delete pod [pod_name]
kubectl apply -f [config_file_name]
kubectl describe pod [pod_name]
```
## Deployment commands
```
kubectl get deployments
kubectl describe deployment
kubectl delete deployment 
kubectl apply -f [config_file_name]

//method2
kubectl rollout restart deployment [deployment_name]

kubectl get services
kubectl get ingress
```

## Setting Host
```
code /etc/host
```


kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml