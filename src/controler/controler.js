import exmodel from "../model/model.js";


//1. Add an expense--------------------------------------------


export const Postdata= async(req,res)=>{
    try {
        let data= req.body;
       let date=  Date.now();
       data.Date= date;
const postdata= await exmodel.create(data);
res.status(201).json({message:"success",data:postdata});


    } catch (error) {
       res.status(500).json({message:error.message}); 
    }
}



//2. View all expenses


export const GetData= async (req,res)=>{
    try {
        
    const data= await exmodel.find();
    res.status(200).json({message:"success",data:data});
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
};

//3. Delete an expense

export const DeleteData =async(req,res)=>{
    try {
        const dataID= req.params.ID;
    // 
    console.log(dataID)
    
     const Delete= await exmodel.updateOne({_id:dataID, isDeleted:false},{isDeleted:true},{new:true});
if(Delete){
    return res.status(200).json({success:true,data:Delete});
}else{
    return res.status(200).json({message:"didn't find the data"});
}
        
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}

//4. Modify an expense

export const UpdateData =async(req,res)=>{
    try {
        const dataID= req.params.ID;
        const updateData= req.body;
     const UpdateData= await exmodel.updateOne({_id:dataID, isDeleted:false},updateData,{new:true});
if(UpdateData){
    return res.status(200).json({success:true,data:updateData});
}else{
    return res.status(200).json({message:"didn't find the data"});
}
        
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}