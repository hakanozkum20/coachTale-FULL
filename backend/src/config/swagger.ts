import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AI Eğitim Koçu API',
            version: '1.0.0',
            description: 'Eğitim koçluğu platformu için backend API dokümantasyonu',
            contact: {
                name: 'API Support',
                email: 'support@example.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Local Development Server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/routes/*.ts', './src/app.ts'], // Dokümantasyonun okunacağı dosyalar
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
