

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsMinDepositTermType model module.
 * @module model/GetFixedDepositProductsMinDepositTermType
 * @version 1.0
 */
class GetFixedDepositProductsMinDepositTermType {
    /**
     * Constructs a new <code>GetFixedDepositProductsMinDepositTermType</code>.
     * @alias module:model/GetFixedDepositProductsMinDepositTermType
     */
    constructor() { 
        
        GetFixedDepositProductsMinDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsMinDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsMinDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsMinDepositTermType} The populated <code>GetFixedDepositProductsMinDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsMinDepositTermType();

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
GetFixedDepositProductsMinDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsMinDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsMinDepositTermType.prototype['description'] = undefined;






export default GetFixedDepositProductsMinDepositTermType;

