# web-hw2

Use below command  to run nginx containing content files.
```
docker run -it --rm -d -p 8888:80 --name web -v content_full_path:/usr/share/nginx/html nginx
```