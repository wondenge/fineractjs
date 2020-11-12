

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdInterestCompoundingPeriodType model module.
 * @module model/GetFixedDepositProductsProductIdInterestCompoundingPeriodType
 * @version 1.0
 */
class GetFixedDepositProductsProductIdInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdInterestCompoundingPeriodType</code>.
     * @alias module:model/GetFixedDepositProductsProductIdInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdInterestCompoundingPeriodType} The populated <code>GetFixedDepositProductsProductIdInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdInterestCompoundingPeriodType();

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
GetFixedDepositProductsProductIdInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsProductIdInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsProductIdInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetFixedDepositProductsProductIdInterestCompoundingPeriodType;

