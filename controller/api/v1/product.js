const Product = require('../../../models/product');     //Importing the Schema

//Actions to perform on Products


module.exports.create = function (req, res) {

    Product.create(req.body, function (err, product) {  
        if (err) {
            console.error(err);
            return res.redirect('/');
        }

        return res.json({
            message: 'New product Created!!',
        });

    });
}

module.exports.showProduct = async function (req, res) {

    try {
        let product = await Product.find({});
        return res.json({
            message: ' Lists of Products',
            data: product
        })

    } catch (err) {
        console.log('Errror', err);
        return res.json(400, {
            message: 'Unable to find any product'
        });
    }

}

module.exports.deleteProduct = async function (req, res) {

    try {
        let product = await Product.findById(req.params.id);

        product.remove();

        return res.json(200, {
            message: 'Deleted Successfully'
        });

    } catch (err) {

        console.log('Errror', err);
        return res.json(400, {
            message: 'Unable to find/Delete product'
        });

    }
}

module.exports.update = function(req,res,query){

    Product.findOneAndUpdate(req.params.id,{ $inc: { quantity: req.query.number }},function(err,product){

       if(err){
           console.log('Error',err);
           return res.json(400, {
            message: 'Unable to find/Update product'
        });

       }else{
        return res.json({data:{
            product:product,
            message: "updated  succesfully"
          }});
       }
       

    })
   
}