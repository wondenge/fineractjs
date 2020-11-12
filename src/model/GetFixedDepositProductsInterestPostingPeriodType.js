

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsInterestPostingPeriodType model module.
 * @module model/GetFixedDepositProductsInterestPostingPeriodType
 * @version 1.0
 */
class GetFixedDepositProductsInterestPostingPeriodType {
    /**
     * Constructs a new <code>GetFixedDepositProductsInterestPostingPeriodType</code>.
     * @alias module:model/GetFixedDepositProductsInterestPostingPeriodType
     */
    constructor() { 
        
        GetFixedDepositProductsInterestPostingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsInterestPostingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsInterestPostingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsInterestPostingPeriodType} The populated <code>GetFixedDepositProductsInterestPostingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsInterestPostingPeriodType();

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
GetFixedDepositProductsInterestPostingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsInterestPostingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsInterestPostingPeriodType.prototype['description'] = undefined;






export default GetFixedDepositProductsInterestPostingPeriodType;

