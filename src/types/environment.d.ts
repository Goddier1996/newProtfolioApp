
declare global {
  namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_SERVICE_KEY: string;
        REACT_APP_TEMPLATE: string;
        REACT_APP_PASSWORD: string;
        REACT_APP_URL_MY_DIPLOMA: string;
    }
  }
}