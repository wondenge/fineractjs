

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdTermPeriodFrequencyType model module.
 * @module model/GetLoansLoanIdTermPeriodFrequencyType
 * @version 1.0
 */
class GetLoansLoanIdTermPeriodFrequencyType {
    /**
     * Constructs a new <code>GetLoansLoanIdTermPeriodFrequencyType</code>.
     * @alias module:model/GetLoansLoanIdTermPeriodFrequencyType
     */
    constructor() { 
        
        GetLoansLoanIdTermPeriodFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdTermPeriodFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdTermPeriodFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdTermPeriodFrequencyType} The populated <code>GetLoansLoanIdTermPeriodFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdTermPeriodFrequencyType();

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
GetLoansLoanIdTermPeriodFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdTermPeriodFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdTermPeriodFrequencyType.prototype['description'] = undefined;






export default GetLoansLoanIdTermPeriodFrequencyType;

