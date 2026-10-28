# Backend Cloud: API de imágenes con Cloudflare Images

API REST en Node.js y Express para subir, listar y eliminar imágenes usando **Cloudflare Images**. Los archivos llegan por `multipart/form-data` y se reenvían a Cloudflare, que se encarga del almacenamiento y la entrega.

*Node.js · Express · Multer · Axios · Cloudflare Images*

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| `POST` | `/images/upload` | Sube una imagen (campo `file`) |
| `GET` | `/images` | Lista las imágenes de la cuenta |
| `DELETE` | `/images/:imageId` | Elimina una imagen |

## Estructura

- `src/network`: rutas HTTP y manejo de archivos con Multer.
- `src/controllers`: lógica de cada operación.
- `src/services`: cliente de Cloudflare con patrón *Singleton* y un *Service Locator* para inyectar dependencias.

## Ejecutar

```bash
cp .env.example .env   # agrega tu token y account ID de Cloudflare
npm install
npm run dev            # o: node index.js
```

La API queda en `http://localhost:8081`.
