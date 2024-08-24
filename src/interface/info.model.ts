export interface InfoAboutMe{
    info: string;
    title: string;
    Icon: any;
}[]


export interface InfoAboutMePersonal{
    info: string;
}


export interface MySkills{
    title: string;
    image: any;
}[]


export interface ShowMyProjects{
    type: string;
    image: string;
    nameProject: string;
    skills: string;
    link: string;
    git: string;
    about: string;
    video: string;
}[]


export interface Recommends{
    name: string;
    position: string;
    image: any;
    bio: string;
}[]


export interface TypeMyProject {
    typeProject: string;
}


export interface MyCertificate{
    title: string;
    image: any;
}[]


export interface MyDiploma{
    title: string;
    image: any;
}[]


export interface ObjectCustomHook{
    typeFetchData?: string;
    typeProject?:any
}


export interface ObjectMenuOptions{
    id?: any;
    type?: string;
}[]


export interface LazyImg{
    src?: string;
    width?: number
    height?:number
    alt?:string
}


export interface SocialData{
    ariaLabel?: string;
    hrefSocial?: string;
    typeSocial?: string;
}