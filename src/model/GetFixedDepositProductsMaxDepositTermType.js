  

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsMaxDepositTermType model module.
 * @module model/GetFixedDepositProductsMaxDepositTermType
 * @version 1.0
 */
class GetFixedDepositProductsMaxDepositTermType {
    /**
     * Constructs a new <code>GetFixedDepositProductsMaxDepositTermType</code>.
     * @alias module:model/GetFixedDepositProductsMaxDepositTermType
     */
    constructor() { 
        
        GetFixedDepositProductsMaxDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsMaxDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsMaxDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsMaxDepositTermType} The populated <code>GetFixedDepositProductsMaxDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsMaxDepositTermType();

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
GetFixedDepositProductsMaxDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsMaxDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsMaxDepositTermType.prototype['description'] = undefined;






export default GetFixedDepositProductsMaxDepositTermType;

