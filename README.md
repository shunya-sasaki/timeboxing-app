# Time Boxing App

## Development Note

### Deploy with Nginx

1. Set location `/` and `/_next/` to `nginx.conf`.

   <details><summary>nginx.conf</summary>

   ```conf
   worker_processes  1;

   events {
   worker_connections 1024;
   }

   http {
   include mime.types;
   default_type application/octet-stream;

       sendfile        on;
       keepalive_timeout  65;

       server {
           listen       8080;
           server_name  localhost;

           location /timeboxing-app/ {
               alias /Users/shun/Desktop/timeboxing-app/out/;
               index index.html;
           }

           error_page   500 502 503 504  /50x.html;
           location = /50x.html {
               root   html;
           }
       include servers/*;

       }
   }
   ```

   </details>

2. Run a nginx server with the following command in your terminal.

   ```sh
   nginx
   ```
