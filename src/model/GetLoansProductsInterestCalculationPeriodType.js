

import ApiClient from '../ApiClient';

/**
 * The GetLoansProductsInterestCalculationPeriodType model module.
 * @module model/GetLoansProductsInterestCalculationPeriodType
 * @version 1.0
 */
class GetLoansProductsInterestCalculationPeriodType {
    /**
     * Constructs a new <code>GetLoansProductsInterestCalculationPeriodType</code>.
     * @alias module:model/GetLoansProductsInterestCalculationPeriodType
     */
    constructor() { 
        
        GetLoansProductsInterestCalculationPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansProductsInterestCalculationPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansProductsInterestCalculationPeriodType} obj Optional instance to populate.
     * @return {module:model/GetLoansProductsInterestCalculationPeriodType} The populated <code>GetLoansProductsInterestCalculationPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansProductsInterestCalculationPeriodType();

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
GetLoansProductsInterestCalculationPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansProductsInterestCalculationPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansProductsInterestCalculationPeriodType.prototype['description'] = undefined;






export default GetLoansProductsInterestCalculationPeriodType;

