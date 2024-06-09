# Time Boxing App

## Development Note

### Install Recoil

```sh
npm install recoil
```

### Install Fontawesome (Free)

```sh
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```

### Static export setting

> _next.config.mjs_

```diff
  /** @type {import('next').NextConfig} */
- const nextConfig = {};
+ const nextConfig = {output: "export"};

  export default nextConfig;
```

### NPM Commands

- _run server_

  ```sh
  npm run dev
  ```

## Deploy

### Build static files

```sh
npm run build
```

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

            location / {
                root /YOUR_PROJECT/timeboxing-app/out;  # Replace to your project directory path
                index  index.html index.htm;
            }

            location /_next/ {
                alias /YOUR_PROJECT/timeboxing-app/out/_next/;
            }
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
            }
        include servers/*;

    }
    ```

    </details>

2. Run a nginx server with the following command in your terminal.

    ```sh
    nginx
    ```
