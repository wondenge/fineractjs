

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsPaymentType model module.
 * @module model/GetSavingsProductsPaymentType
 * @version 1.0
 */
class GetSavingsProductsPaymentType {
    /**
     * Constructs a new <code>GetSavingsProductsPaymentType</code>.
     * @alias module:model/GetSavingsProductsPaymentType
     */
    constructor() { 
        
        GetSavingsProductsPaymentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsPaymentType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsPaymentType} The populated <code>GetSavingsProductsPaymentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsPaymentType();

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
GetSavingsProductsPaymentType.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsPaymentType.prototype['name'] = undefined;






export default GetSavingsProductsPaymentType;

