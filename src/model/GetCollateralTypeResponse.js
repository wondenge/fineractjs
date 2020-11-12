

import ApiClient from '../ApiClient';

/**
 * The GetCollateralTypeResponse model module.
 * @module model/GetCollateralTypeResponse
 * @version 1.0
 */
class GetCollateralTypeResponse {
    /**
     * Constructs a new <code>GetCollateralTypeResponse</code>.
     * @alias module:model/GetCollateralTypeResponse
     */
    constructor() { 
        
        GetCollateralTypeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCollateralTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCollateralTypeResponse} obj Optional instance to populate.
     * @return {module:model/GetCollateralTypeResponse} The populated <code>GetCollateralTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCollateralTypeResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCollateralTypeResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetCollateralTypeResponse.prototype['name'] = undefined;






export default GetCollateralTypeResponse;

