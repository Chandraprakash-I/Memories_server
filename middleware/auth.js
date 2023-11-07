import jwt from 'jsonwebtoken'

const auth=async (req,res,next)=>{
    try{
        console.log(req.headers);
        if(req.headers.authorization){
            const token=req.headers.authorization.split(" ")[1];
            console.log("token:"+token);

            const isCustomAuth=token.length <500;

            let decodeData;
            if(token && isCustomAuth){
                decodeData=jwt.verify(token,'test');
                req.userId=decodeData?.id ;
    
            }else{
                decodeData=jwt.decode(token);
                req.userId =decodeData?.sub;
            }
            next();
        }else{
            console.log('no authorization');
        }
        
        
      
    }catch(error){
        console.log(error);
    }
}

export default auth;