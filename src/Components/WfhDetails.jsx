import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Box,Button,Img, SimpleGrid, Text} from "@chakra-ui/react"
import { useEffect } from 'react'
import axios from "axios"
import prodSlider from '../misc/ProductsPageslider';
import { useToast } from '@chakra-ui/react'

const WfhDetails = () => {
  const toast = useToast();
  const [product,SetProduct] = useState({})
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false)
  const params = useParams()
  const [sliderValue, setSliderValue] = useState(0);
  const navigate=useNavigate()
 
  useEffect(()=> {
    setLoading(true)
    axios.get(`https://json-server-mocker-myapi.herokuapp.com/wfh_All/${params.id}`)
    .then((res)=> {
      SetProduct(res.data)
     setLoading(false)
    })
    .catch(() => setError(true) )
  },[])
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let date = new Date().getDate() ;
  //console.log(date,month,year)


  const addToCart = () => {
    
    const payload = {
      title : product.title,
      price: product.price,
      image: product.img,
      category : "WFH-Essentials",
      deposit : `${Number(product.price)+Number(150)}`,
    }

    axios.post("https://json-server-mocker-myapi.herokuapp.com/cart",payload)
    .then((res)=> {
      toast({
        title: 'Item Added to Cart.',
        description: "This Item has been Added to Your cart.",
        position: "top",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      navigate("/")
    })
    .catch(()=> alert("Failed to Add"))
  }

  return loading ? (<Img width="15%" style={{marginLeft:"30%"}} src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" />) 
  : error ? (<Img width="30%" style={{marginLeft:"30%",borderRadius:"8px"}} src="https://yacht-express.net/wp-content/uploads/2020/12/it-seems-that-something-went-wrong-1-718x602.gif" />) 
  : (
   <Box>
    <SimpleGrid columns={{
      sm: 1,
      md: 1,
      lg: 2,
      xl : 2,
      base : 1
    }}>
      <Box ><Img width="100%" src={product.img} />
      </Box>
      

      <Box >
       
        <Box style={{width: "50%",margin:"auto",marginTop:"4%"}}>
          <Text style={{
          fontWeight:"bold"
        }}
         fontSize={{
          sm: "15px",
          md: "18px",
          lg: "19px",
          xl: '20px',
          base : "14px"
        }}
        >{product.title}</Text></Box>

<Box style={{width: "80%",margin:"auto",marginTop:"4%",display:"flex"}}><Text  fontSize={{
          sm: "15px",
          md: "18px",
          lg: "19px",
          xl: '20px',
          base : "14px"
        }}>How long do you want to rent this for? (Months)</Text><Img width="5%" src="https://www.rentomojo.com/public/images/icons/info-line-icon.svg"/></Box>


       <Box>
        <Box style={{display:"flex",width:"60%",margin:"auto",marginTop:"5%"}}>
          <Box style={{border:"1px solid #edf2f6",padding:"3%",width:"50%"}}>
            <Text fontSize={{
          sm: "15px",
          md: "18px",
          lg: "19px",
          xl: '20px',
          base : "14px"
        }} fontWeight="bold">${product.price}/mo</Text>
            <Text fontSize={{
          sm: "14px",
          md: "16px",
          lg: "17px",
          xl: '18px',
          base : "14px"
        }}>monthly Rent</Text>
            </Box>

            <Box style={{border:"1px solid #edf2f6",padding:"3%",width:"50%"}}>
            <Text fontSize={{
          sm: "15px",
          md: "18px",
          lg: "19px",
          xl: '20px',
          base : "14px"
        }} fontWeight="bold">{product.o_price}hrs </Text>
            <Text  fontSize={{
          sm: "14px",
          md: "16px",
          lg: "17px",
          xl: '18px',
          base : "14px"
        }}>Deleivery</Text>
            </Box>
        </Box>
        <Box style={{display:"flex",border:"1px solid #edf2f6",width:"60%",margin:"auto",padding:"3%"}}>
          <Box display="flex">
          <Text   fontSize={{
          sm: "10px",
          md: "12px",
          lg: "16px",
          xl: '16px',
          base : "12px"
        }}>7 Days Free Trial</Text>
          </Box>
          <Box display="flex">
          <Text    fontSize={{
           sm: "10px",
           md: "12px",
           lg: "16px",
           xl: '16px',
           base : "12px"
        }}>Free Relocation</Text>
          </Box>
          <Box display="flex">
          <Text fontSize={{
           sm: "10px",
           md: "12px",
           lg: "16px",
           xl: '16px',
           base : "12px"
        }}>Free upgrades</Text>
          </Box>
        </Box>
       </Box>

        <Box
        style={{
          display:"flex",width:"60%",margin:"auto",marginTop:"3%"
        }}
        ><Img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"/>
        <Text  style={{marginLeft:"2%"}} fontSize={{
          sm: "13px",
          md: "16px",
          lg: "17px",
          xl: '18px',
          base : "12px"
        }} color="grey">Deleivery By</Text>
        <Text style={{marginLeft:"2%"}}  fontSize={{
        sm: "13px",
        md: "16px",
        lg: "17px",
        xl: '18px',
        base : "12px"
        }}>{date}/{month}/{year}</Text>
        </Box>
            <Box style={{
              width:"60%",margin:"auto",marginTop:"4%"
            }}><Button onClick={()=> addToCart()} style={{
              backgroundColor:"#dc3226",color:"white"
            }}><Img marginRight="3%" src="https://www.rentomojo.com/public/images/icons/cart-new.svg"/>
            Book Your Plan </Button></Box>

          
            <Box style={{
              width:"60%",margin:"auto",marginTop:"4%",display:"flex",justifyContent:"space-between"
            }}>  <Text style={{marginLeft:"2%"}}  fontSize={{
        sm: "14px",
        md: "17px",
        lg: "19px",
        xl: '20px',
        base : "12px"
        }}>Special Offers</Text><Text style={{marginLeft:"2%"}}  fontSize={{
          sm: "14px",
          md: "17px",
          lg: "19px",
          xl: '20px',
          base : "12px"
          }} color="#77d5d8">+2 More Offer</Text></Box>
          <Box  style={{
               height:"100px",display:"flex",pading:"3%", border: '1px dotted grey', width:"60%",margin:"auto",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          }}>
            <Box style={{width:"20%",margin:"auto",marginLeft:"3%"}}><Img width="50%" src="https://www.rentomojo.com/public/images/product/special-offer.svg"/></Box>
            <Box style={{width:"80%",margin:"auto"}}>
            <Text style={{marginLeft:"2%"}}  fontSize={{
          sm: "12px",
          md: "15px",
          lg: "16px",
          xl: '17px',
          base : "12px"
          }} >Use Code RAHI15</Text>
             <Text style={{marginLeft:"2%"}}  fontSize={{
          sm: "12px",
          md: "14px",
          lg: "15px",
          xl: '16px',
          base : "12px"
          }} color="grey" >Flat 15% off on third Month Invoice....</Text>
            <Text style={{marginLeft:"2%"}}  fontSize={{
          sm: "12px",
          md: "13px",
          lg: "14px",
          xl: '15px',
          base : "12px"
          }} color="#77d5d8" >Read More...</Text>
          <Text style={{marginLeft:"2%"}}  fontSize={{
          sm: "12px",
          md: "12px",
          lg: "13px",
          xl: '14px',
          base : "12px"
          }} color="tomato" >Applicable to New users.</Text>
          
          
            </Box>
          </Box>
      </Box>
    </SimpleGrid>
   </Box>
  )
}

export default WfhDetails