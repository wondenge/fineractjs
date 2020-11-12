

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsInterestCalculationDaysInYearType model module.
 * @module model/GetFixedDepositAccountsInterestCalculationDaysInYearType
 * @version 1.0
 */
class GetFixedDepositAccountsInterestCalculationDaysInYearType {
    /**
     * Constructs a new <code>GetFixedDepositAccountsInterestCalculationDaysInYearType</code>.
     * @alias module:model/GetFixedDepositAccountsInterestCalculationDaysInYearType
     */
    constructor() { 
        
        GetFixedDepositAccountsInterestCalculationDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsInterestCalculationDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsInterestCalculationDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsInterestCalculationDaysInYearType} The populated <code>GetFixedDepositAccountsInterestCalculationDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsInterestCalculationDaysInYearType();

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
GetFixedDepositAccountsInterestCalculationDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsInterestCalculationDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsInterestCalculationDaysInYearType.prototype['description'] = undefined;






export default GetFixedDepositAccountsInterestCalculationDaysInYearType;

