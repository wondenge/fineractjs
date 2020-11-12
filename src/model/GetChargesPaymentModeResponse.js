

import ApiClient from '../ApiClient';

/**
 * The GetChargesPaymentModeResponse model module.
 * @module model/GetChargesPaymentModeResponse
 * @version 1.0
 */
class GetChargesPaymentModeResponse {
    /**
     * Constructs a new <code>GetChargesPaymentModeResponse</code>.
     * @alias module:model/GetChargesPaymentModeResponse
     */
    constructor() { 
        
        GetChargesPaymentModeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesPaymentModeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesPaymentModeResponse} obj Optional instance to populate.
     * @return {module:model/GetChargesPaymentModeResponse} The populated <code>GetChargesPaymentModeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesPaymentModeResponse();

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
GetChargesPaymentModeResponse.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesPaymentModeResponse.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesPaymentModeResponse.prototype['description'] = undefined;






export default GetChargesPaymentModeResponse;

