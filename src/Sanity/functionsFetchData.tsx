import sanityClient from "./client";


export async function GetRecommends() {
  return await sanityClient.fetch(
    `*[_type=="recommends"]{
      name,
      position,
      bio,
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
