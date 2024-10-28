
import { useEffect, useState } from 'react'
import Option from '../Option/Option'

const PriceOptions = () => {

    const [load, setLoad] = useState([])

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setLoad(data.membershipOptions))



    }, [])





    return (
        <div>
            <h2 className='text-2xl font-bold' >Best Prices</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 m-12 '>
                {
                    load.map((priceOption) => <Option key={priceOption.id} priceOption={priceOption} />)

                }
            </div>
        </div>
    )
}

export default PriceOptions
