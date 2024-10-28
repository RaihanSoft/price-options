import PropTypes from "prop-types"
import Features from "../features/features"
const Option = ({ priceOption }) => {


    const { name, price, duration, features } = priceOption

    return (
        <div className="bg-blue-500 space-y-4 text-center rounded-md p-4 text-white font-bold">

            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-xl">/Mon</span>

            </h2>
                <span className="text-xl">/{duration}</span>

            <h4 className="font-bold text-2xl">{name}</h4>


            {

                features.map((feature, index) => <Features key={index} feature={feature} />)
            }


        </div>
    )
}

Option.PropTypes = {
    option: PropTypes.object
}

export default Option
