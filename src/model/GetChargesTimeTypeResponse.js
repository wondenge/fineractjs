

import ApiClient from '../ApiClient';

/**
 * The GetChargesTimeTypeResponse model module.
 * @module model/GetChargesTimeTypeResponse
 * @version 1.0
 */
class GetChargesTimeTypeResponse {
    /**
     * Constructs a new <code>GetChargesTimeTypeResponse</code>.
     * @alias module:model/GetChargesTimeTypeResponse
     */
    constructor() { 
        
        GetChargesTimeTypeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesTimeTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesTimeTypeResponse} obj Optional instance to populate.
     * @return {module:model/GetChargesTimeTypeResponse} The populated <code>GetChargesTimeTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesTimeTypeResponse();

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
GetChargesTimeTypeResponse.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesTimeTypeResponse.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesTimeTypeResponse.prototype['description'] = undefined;






export default GetChargesTimeTypeResponse;

