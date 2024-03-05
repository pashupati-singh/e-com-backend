

const express = require("express");
const { connection } = require("./db/db");
const { AuthRoutes } = require("./Routes/Auth.Routes");
const { productRoutes } = require("./Routes/Product.Routes");
const { cartRoute } = require("./Routes/Cart.Routes");
const { AddressRoute } = require("./Routes/Address.Routes");
const cors = require('cors')
const app =  express();
app.use(cors())



app.use(express.json());

app.use("/users",AuthRoutes)
app.use("/Product",productRoutes);
app.use("/cart",cartRoute)
app.use('/address',AddressRoute)
app.get("/",(req,res)=>{
    res.send("get is working properly")
})


app.listen(8080,async()=>{
    try {
        console.log("port is running")
        await connection;
        console.log("server is connected")
    } catch (error) {
        console.log(error);
    }
})