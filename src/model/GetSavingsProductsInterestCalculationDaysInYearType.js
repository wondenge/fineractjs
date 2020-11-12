

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsInterestCalculationDaysInYearType model module.
 * @module model/GetSavingsProductsInterestCalculationDaysInYearType
 * @version 1.0
 */
class GetSavingsProductsInterestCalculationDaysInYearType {
    /**
     * Constructs a new <code>GetSavingsProductsInterestCalculationDaysInYearType</code>.
     * @alias module:model/GetSavingsProductsInterestCalculationDaysInYearType
     */
    constructor() { 
        
        GetSavingsProductsInterestCalculationDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsInterestCalculationDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsInterestCalculationDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsInterestCalculationDaysInYearType} The populated <code>GetSavingsProductsInterestCalculationDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsInterestCalculationDaysInYearType();

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
GetSavingsProductsInterestCalculationDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsInterestCalculationDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsInterestCalculationDaysInYearType.prototype['description'] = undefined;






export default GetSavingsProductsInterestCalculationDaysInYearType;

