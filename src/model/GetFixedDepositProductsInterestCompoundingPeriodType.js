

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsInterestCompoundingPeriodType model module.
 * @module model/GetFixedDepositProductsInterestCompoundingPeriodType
 * @version 1.0
 */
class GetFixedDepositProductsInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetFixedDepositProductsInterestCompoundingPeriodType</code>.
     * @alias module:model/GetFixedDepositProductsInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetFixedDepositProductsInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsInterestCompoundingPeriodType} The populated <code>GetFixedDepositProductsInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsInterestCompoundingPeriodType();

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
GetFixedDepositProductsInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetFixedDepositProductsInterestCompoundingPeriodType;

