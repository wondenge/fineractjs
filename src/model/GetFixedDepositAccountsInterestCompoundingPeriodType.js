

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsInterestCompoundingPeriodType model module.
 * @module model/GetFixedDepositAccountsInterestCompoundingPeriodType
 * @version 1.0
 */
class GetFixedDepositAccountsInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetFixedDepositAccountsInterestCompoundingPeriodType</code>.
     * @alias module:model/GetFixedDepositAccountsInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetFixedDepositAccountsInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsInterestCompoundingPeriodType} The populated <code>GetFixedDepositAccountsInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsInterestCompoundingPeriodType();

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
GetFixedDepositAccountsInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetFixedDepositAccountsInterestCompoundingPeriodType;

