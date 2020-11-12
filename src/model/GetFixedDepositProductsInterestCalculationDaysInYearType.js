

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsInterestCalculationDaysInYearType model module.
 * @module model/GetFixedDepositProductsInterestCalculationDaysInYearType
 * @version 1.0
 */
class GetFixedDepositProductsInterestCalculationDaysInYearType {
    /**
     * Constructs a new <code>GetFixedDepositProductsInterestCalculationDaysInYearType</code>.
     * @alias module:model/GetFixedDepositProductsInterestCalculationDaysInYearType
     */
    constructor() { 
        
        GetFixedDepositProductsInterestCalculationDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsInterestCalculationDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsInterestCalculationDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsInterestCalculationDaysInYearType} The populated <code>GetFixedDepositProductsInterestCalculationDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsInterestCalculationDaysInYearType();

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
GetFixedDepositProductsInterestCalculationDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsInterestCalculationDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsInterestCalculationDaysInYearType.prototype['description'] = undefined;






export default GetFixedDepositProductsInterestCalculationDaysInYearType;

