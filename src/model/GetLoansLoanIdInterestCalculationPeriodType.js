

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdInterestCalculationPeriodType model module.
 * @module model/GetLoansLoanIdInterestCalculationPeriodType
 * @version 1.0
 */
class GetLoansLoanIdInterestCalculationPeriodType {
    /**
     * Constructs a new <code>GetLoansLoanIdInterestCalculationPeriodType</code>.
     * @alias module:model/GetLoansLoanIdInterestCalculationPeriodType
     */
    constructor() { 
        
        GetLoansLoanIdInterestCalculationPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdInterestCalculationPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdInterestCalculationPeriodType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdInterestCalculationPeriodType} The populated <code>GetLoansLoanIdInterestCalculationPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdInterestCalculationPeriodType();

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
GetLoansLoanIdInterestCalculationPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdInterestCalculationPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdInterestCalculationPeriodType.prototype['description'] = undefined;






export default GetLoansLoanIdInterestCalculationPeriodType;

