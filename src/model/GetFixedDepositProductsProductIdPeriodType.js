

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdPeriodType model module.
 * @module model/GetFixedDepositProductsProductIdPeriodType
 * @version 1.0
 */
class GetFixedDepositProductsProductIdPeriodType {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdPeriodType</code>.
     * @alias module:model/GetFixedDepositProductsProductIdPeriodType
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdPeriodType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdPeriodType} The populated <code>GetFixedDepositProductsProductIdPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdPeriodType();

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
GetFixedDepositProductsProductIdPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsProductIdPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsProductIdPeriodType.prototype['description'] = undefined;






export default GetFixedDepositProductsProductIdPeriodType;

