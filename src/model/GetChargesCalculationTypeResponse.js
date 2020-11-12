

import ApiClient from '../ApiClient';

/**
 * The GetChargesCalculationTypeResponse model module.
 * @module model/GetChargesCalculationTypeResponse
 * @version 1.0
 */
class GetChargesCalculationTypeResponse {
    /**
     * Constructs a new <code>GetChargesCalculationTypeResponse</code>.
     * @alias module:model/GetChargesCalculationTypeResponse
     */
    constructor() { 
        
        GetChargesCalculationTypeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesCalculationTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesCalculationTypeResponse} obj Optional instance to populate.
     * @return {module:model/GetChargesCalculationTypeResponse} The populated <code>GetChargesCalculationTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesCalculationTypeResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetChargesCalculationTypeResponse.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesCalculationTypeResponse.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesCalculationTypeResponse.prototype['description'] = undefined;






export default GetChargesCalculationTypeResponse;

