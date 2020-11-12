

import ApiClient from '../ApiClient';

/**
 * The GetPaymentTypesResponse model module.
 * @module model/GetPaymentTypesResponse
 * @version 1.0
 */
class GetPaymentTypesResponse {
    /**
     * Constructs a new <code>GetPaymentTypesResponse</code>.
     * GetPaymentTypesResponse
     * @alias module:model/GetPaymentTypesResponse
     */
    constructor() { 
        
        GetPaymentTypesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPaymentTypesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentTypesResponse} obj Optional instance to populate.
     * @return {module:model/GetPaymentTypesResponse} The populated <code>GetPaymentTypesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPaymentTypesResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isCashPayment')) {
                obj['isCashPayment'] = ApiClient.convertToType(data['isCashPayment'], 'Boolean');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetPaymentTypesResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetPaymentTypesResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetPaymentTypesResponse.prototype['description'] = undefined;

/**
 * @member {Boolean} isCashPayment
 */
GetPaymentTypesResponse.prototype['isCashPayment'] = undefined;

/**
 * @member {Number} position
 */
GetPaymentTypesResponse.prototype['position'] = undefined;






export default GetPaymentTypesResponse;

