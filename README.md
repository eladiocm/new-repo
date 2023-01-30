## GDX Central CRM


### Es necesario tener:

- **PHP >= 8.0**
- **Composer 2.2.7**
- **Node >= 12.21.0**
- **Npm >= 6.14.11**


### Corre los siguientes comandos despues de clonar el proyecto.

- composer update
- cp .env.example .env
- php artisan key:generate
- npm install
- npm run dev
- php artisan serve


## Development

### Si modificas constantemente archivos sass, js, css ejecuta:

```
npm run watch
```

### para compilar assets en tiempo real.


## Built With

* [Laravel](https://laravel.com/docs/9.x) - The web Framework used
* [Composer](https://getcomposer.org/) - Dependency Management
* [Node](https://nodejs.org/es/) - Dependency Management