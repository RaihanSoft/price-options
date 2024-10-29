import axios from "axios"
import { useEffect, useState } from "react"
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts"

const AxiosFetch = () => {
    const [load, setLoad] = useState([])


    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(rest=> rest.json())
        // .then(data => setLoad(data.data) )

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {

                const datas = data.data.data
                const fakeData = datas.map(slug => {

                    const obj = {
                        name: slug.phone_name,
                        price: Number(slug.slug.split('-')[1])

                    }
                    return obj;

                })
                setLoad(fakeData)





            })

    }, [])
    console.log(load)

    return (
        <div>
            <h3>length : {load.length}</h3>

            <BarChart width={1200} height={400} data={load} >
                
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={"name"} />
                <YAxis dataKey={"price"} />
                <Tooltip />
            </BarChart>





        </div>
    )
}

export default AxiosFetch
