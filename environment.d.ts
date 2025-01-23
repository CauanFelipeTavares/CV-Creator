declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string
            JWT_PRIVATE: string
            ROOT_USER_ID: string
        }
    }
}

export {}