export interface InfoAboutMe{
    info: string;
    title: string;
    Icon: any;
}[]


export interface MySkills{
    title: string;
    image: string;
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
    link: string;
    image: any;
}[]