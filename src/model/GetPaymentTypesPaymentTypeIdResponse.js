

import ApiClient from '../ApiClient';

/**
 * The GetPaymentTypesPaymentTypeIdResponse model module.
 * @module model/GetPaymentTypesPaymentTypeIdResponse
 * @version 1.0
 */
class GetPaymentTypesPaymentTypeIdResponse {
    /**
     * Constructs a new <code>GetPaymentTypesPaymentTypeIdResponse</code>.
     * GetPaymentTypesPaymentTypeIdResponse
     * @alias module:model/GetPaymentTypesPaymentTypeIdResponse
     */
    constructor() { 
        
        GetPaymentTypesPaymentTypeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPaymentTypesPaymentTypeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentTypesPaymentTypeIdResponse} obj Optional instance to populate.
     * @return {module:model/GetPaymentTypesPaymentTypeIdResponse} The populated <code>GetPaymentTypesPaymentTypeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPaymentTypesPaymentTypeIdResponse();

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
GetPaymentTypesPaymentTypeIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetPaymentTypesPaymentTypeIdResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetPaymentTypesPaymentTypeIdResponse.prototype['description'] = undefined;

/**
 * @member {Boolean} isCashPayment
 */
GetPaymentTypesPaymentTypeIdResponse.prototype['isCashPayment'] = undefined;

/**
 * @member {Number} position
 */
GetPaymentTypesPaymentTypeIdResponse.prototype['position'] = undefined;






export default GetPaymentTypesPaymentTypeIdResponse;

