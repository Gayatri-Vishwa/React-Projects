
import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";
import { Permission, Role } from "appwrite";



export class AppwriteService{
   client=new Client();
   databases;
   bucket;  
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        
        this.databases= new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async  createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status,userId
                }
            )
        } catch (error) {
             console.log("Appwrite service:: create post::error ",error)
             return error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,content,featuredImage,status
                }
            )
        } catch (error) {
             console.log("Appwrite service:: update post::error ",error)
        }
    }
    async deletePost(slug){
        try {
        await this.databases.deleteDocument(
                 conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
             console.log("Appwrite service:: delete post ::error ",error);
             return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                 conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

            )
        } catch (error) {
          console.log("Appwrite service:: get post::error ",error)   
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,          //or 
                // Query.equal("status","active")
                
            )
            
        } catch (error) {
            console.log("Appwrite service:: get posts ::error ",error);
             return false;
        }
    }
//=============file upload servides===========
    async uploadFile(file){     //should be pass blog not file name
        try {
            return await this.bucket.createFile(
            //   return await this.bucket.uploadFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                  [Permission.read(Role.any())]     //That will make all newly uploaded images accessible in <img> tags.
            )
        } catch (error) {
               console.log("Appwrite service::upload file::error ",error);
             return false;
        }
    }

       async deleteFile(fileId){     //shold be pass blog not file name
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
              fileId
            )
               return true;
        } catch (error) {
               console.log("Appwrite service:: delete file::error ",error);
             return false;
        }
    }
    
    // getFilePreview(fileId){              //not aysn await bcoz it dosnt return
    //     return this.bucket.getFilePreview(
    //         conf.appwriteBucketId,
    //         fileId
    //     )
    // }
   
    getFilePreview(fileId) {
  return this.bucket
    .getFilePreview(conf.appwriteBucketId, fileId)
      // 👈 convert to proper URL string

}




}

const  appwriteService=new AppwriteService()
export default  appwriteService




