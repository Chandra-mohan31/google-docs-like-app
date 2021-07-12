const Document = require("./Document");

exports.getDocs = (req,res) => {
    Document.find().exec((err,docs)=>{
        if(!docs || err){
        return res.status(400).json({
            err:"no docs found"
        })

        
    }
    res.json(docs);

})
}