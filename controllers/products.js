

const getAllProductsStatic = async(req,res)=>{
    throw new Error('Testing async error')
    res.status(200).json({msg: 'products testing route'})
}

const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:'Products route'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}
