/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import FeaturesOption from "../FeaturesOption/FeaturesOption"
const Option = ({ priceOption }) => {


    const { name, price, duration, features } = priceOption

    return (
        <div className="flex flex-col bg-blue-500 space-y-4 text-center rounded-md p-8 text-white font-bold">

            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-xl">/Mon</span>

            </h2>
            <span className="text-xl">/{duration}</span>

            <h4 className="font-bold text-2xl">{name}</h4>

            <div className="pl-2 flex-grow">

                {

                    features.map((feature, index) => <FeaturesOption key={index} feature={feature} />)
                }

            </div>


            <button className="btn btn-error text-white">Buy Now</button>
        </div>
    )
}

Option.PropTypes = {
    option: PropTypes.object
}

export default Option
