import React , {useRef, useState} from 'react'
import './sell.css'
import { Alert } from '@mui/material'
import { postAdToDb }  from '../../Config/firebase'





function AddProduct() {

    const [productTitle ,setProductTitle] = useState()
    const [productType ,setProductType] = useState()
    const [description  ,setDescription] = useState()
    const [brand ,setBrand] = useState()
    const [price ,setPrice] = useState()
    const [waranty ,setWaranty] = useState()
    const [customerSupport ,setCustomerSupport] = useState('')
    const [productImg ,setProductImg] = useState()

    const [successMsg, setSuccessMsg] = useState()
  const [errorMsg, setErrorMsg] = useState()

// const fileInputRef = useRef(null)
   const types = ['image/jpg' , 'image/jpeg' , 'image/png' , 'image/PNG']
    const handleProductImage = (e) =>{

        const selectedFile = e.target.files[0]

        if(selectedFile){
            if(selectedFile && types.includes(selectedFile.type)){
                setProductImg(selectedFile)
                setErrorMsg('')

            }
            else{
                setProductImg(null)
                setErrorMsg('Please select a valid image file type(png or jpg)')
            }

        }else{
            setErrorMsg('Please Select Your file')

        }


    }

    const handleAddProduct = async (e) =>{
      e.preventDefault()
      if (
        !productTitle ||
        !productType ||
        !description ||
        !brand ||
        !price ||
        !waranty ||
        !productImg
      ) {
        setErrorMsg('All fields are required.');
        return // Exit the function if any field is empty
      }

      const adDetail ={
        productTitle,
        productType,
        description,
        brand,
        price,
        waranty,
        customerSupport,
        productImg
      }

      try{
       await postAdToDb(adDetail);
       setProductImg(null)
       setProductTitle('')
       setProductType('')
       setPrice('')
       setDescription('')
       setCustomerSupport('')
       setBrand('')
       setWaranty('')
       setErrorMsg('')
       setSuccessMsg('Data Added Successfully!')
       setTimeout(()=>{
        setSuccessMsg('')
       },5000)
       
      } catch(e){
        setErrorMsg(e.message.split(':'[1]))
        setSuccessMsg('')

      }
       
    };
  
    



  return (
    <>
     {successMsg && <>
      <div className="sucess-msg">
        <Alert
          size="md"
          severity="success">{successMsg}</Alert>
      </div>
    </>}
    {errorMsg && <>
      <div className="error-msg">
        <Alert
          size="md"
         severity="error">{errorMsg}</Alert>
      </div>
    </>}
    <div className='addprod-container'>
        <form className='addprod-form' onSubmit={handleAddProduct}>
        <p>Add Data</p>
        <label>Image</label>
        <input  type='file' 
        key={productImg ? productImg : ''} // Update key when productImg changes
        // ref={fileInputRef}
          onChange={handleProductImage}/>
        <label>Product Title</label>
        <input  placeholder='Product Title' value={productTitle} onChange={(e) => setProductTitle(e.target.value)}/>
        <label>Product Type</label>
        <input  placeholder='Product Type' value={productType} onChange={(e) => setProductType(e.target.value)}/>
        <label>Brand Name</label>
        <input  placeholder='Brand Name' value={brand} onChange={(e) => setBrand(e.target.value)}/>
        <label>Price Without Tax</label>
        <input  placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        <label>Product Waranty</label>
        <input  placeholder='Product Waranty' value={waranty} onChange={(e) => setWaranty(e.target.value)}/>
        <label>Description</label>
        <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea> 
        <label>Customer Support</label>
        <input placeholder='Customer support'  value={customerSupport} onChange={(e) => setCustomerSupport(e.target.value)}/>

        <button>Submit</button>
        </form>
         </div>
    </>
  )
}

export default AddProduct