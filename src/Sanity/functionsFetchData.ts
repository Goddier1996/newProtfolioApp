import sanityClient from "./client";


export async function GetRecommends() {
  return await sanityClient.fetch(
    `*[_type=="recommends"]{
      name,
      position,
      bio,
      linkedin,
      image{
        asset->{
          _id,
          url
        },
      },
      
    }`
  );
}


export async function GetProjects() {
  return await sanityClient.fetch(
    `*[_type=="projects"]{
          type,
          image,
          nameProject,
          skills,
          link,
          git,
          about,
          video,
    }`
  );
}


export async function GetInfoAboutMe() {
  return await sanityClient.fetch(
    `*[_type=="info"]{
        title,
        info
      }`
  );
}


export async function GetMySkills() {
  return await sanityClient.fetch(
    `*[_type=="skills"]{
            title,
        image{
          asset->{
            _id,
            url
          },
        },
      }`
  );
}


export async function GetCertificate() {
  return await sanityClient.fetch(
    `*[_type=="link"]{
            title,
        image{
          asset->{
            _id,
            url
          },
        },
      }`
  );
}


export async function GetDiploma() {
  return await sanityClient.fetch(
    `*[_type=="diploma"]{
          title,
        image{
          asset->{
            _id,
            url
          },
        },
      }`
  );
}