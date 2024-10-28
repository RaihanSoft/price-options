import PropTypes from "prop-types"
import { FaCheck } from "react-icons/fa"

const FeaturesOption = ({feature}) => {

  return (
<div>
        <div className="">
            <p className="flex items-center gap-3 "> <FaCheck className="text-green-400" /> {feature}</p>
          
        </div>
        
</div>
  )
}
FeaturesOption.PropTypes = {
    feature: PropTypes.object
}
export default FeaturesOption
