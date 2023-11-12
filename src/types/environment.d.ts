
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVICE_KEY: string;
      REACT_APP_TEMPLATE: string;
      REACT_APP_PASSWORD: string;
      REACT_APP_URL_MY_DIPLOMA: string;
      REACT_APP_URL_MY_IMG_CERTIFICATE1: string;
      REACT_APP_URL_MY_IMG_CERTIFICATE2: string;
      REACT_APP_MY_LINK_DIPLOMA1: string;
      REACT_APP_MY_LINK_DIPLOMA2: string;
      REACT_APP_RECAPTCHA: string;
    }
  }
}